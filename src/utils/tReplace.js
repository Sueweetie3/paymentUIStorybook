import * as React from 'react';

function isRawStringOrNumber(obj) {
  const type = typeof obj;
  return type === 'string' || type === 'number';
}

function mergeRawStrings(
  mergedArray: React.Node[],
  currentElement: React.Node
): React.Node[] {
  const lastIndex = mergedArray.length - 1;
  const lastMergedElement = mergedArray[lastIndex];
  if (
    isRawStringOrNumber(lastMergedElement) &&
    isRawStringOrNumber(currentElement)
  ) {
    return [
      ...mergedArray.slice(0, lastIndex),
      String(lastMergedElement) + String(currentElement),
    ];
  } else if (currentElement) {
    return [...mergedArray, currentElement];
  }
  return mergedArray;
}

const PAYMENT_FE_PLACEHOLDER_REGEX = /[{][{](.*?)(?:!(.+?))?[}][}]/g;
const PAYMENT_FE_STYLE_REGEX = /(.*?)_(.*)/g;

const PAYMENT_FE_STYLE_PREFIX = Object.freeze({
  BOLD: 'bold',
  ORANGE: 'orange',
  LINK: 'link',
});

function styleText(prefix, replacement, t: I18NFunction) {
  if (replacement) {
    // temporary patch. in the future it should be { content, link, ...rest }
    const text = (() => {
      if (replacement && typeof replacement === 'object') {
        return t(replacement.content) || '';
      }
      return t(replacement);
    })();
    switch (prefix) {
      case PAYMENT_FE_STYLE_PREFIX.BOLD: {
        return (
          <span className="boldText" key={text}>
            {text}
          </span>
        );
      }
      case PAYMENT_FE_STYLE_PREFIX.ORANGE: {
        return (
          <span className="orangeText" key={text}>
            {text}
          </span>
        );
      }
      case PAYMENT_FE_STYLE_PREFIX.LINK: {
        const link = replacement.link || '';
        return (
          <a href={link} key={text}>
            {text}
          </a>
        );
      }
      default:
        return text;
    }
  } else {
    return '';
  }
}

function replaceText(t = (str) => str, extraKey, data) {
  if (data && Object.keys(data).includes(extraKey)) {
    return data[extraKey] ? data[extraKey] : '';
  } else {
    return t(extraKey) || '';
  }
}

function handleInsideKey(t = (str) => str, insideKey, data) {
  const styleRegex = new RegExp(PAYMENT_FE_STYLE_REGEX);
  const styleMatch = styleRegex.exec(insideKey);
  if (!styleMatch) {
    return replaceText(t, insideKey, data);
  }
  const prefix = styleMatch[1];
  let isStyleText = false;
  for (let stylePrefix in PAYMENT_FE_STYLE_PREFIX) {
    if (PAYMENT_FE_STYLE_PREFIX[stylePrefix].indexOf(prefix) !== -1) {
      isStyleText = true;
      break;
    }
  }
  const extraKey = isStyleText ? styleMatch[2] : insideKey;
  const replacement = replaceText(t, extraKey, data);
  return isStyleText ? styleText(prefix, replacement, t) : replacement;
}

// eslint-disable-next-line max-statements
function tReplaceSingleText(t = (str) => str, text, data) {
  const placeholderRegex = new RegExp(PAYMENT_FE_PLACEHOLDER_REGEX);
  let explodedString = [];
  let placeholderMatch;
  let cursor = 0;
  let key = 0;
  while ((placeholderMatch = placeholderRegex.exec(text))) {
    const [literal, insideKey] = placeholderMatch;
    if (!literal) break;
    const {index} = placeholderMatch;
    const prevPart = text.substring(cursor, index);
    if (prevPart) {
      explodedString.push(prevPart);
    }
    explodedString.push(handleInsideKey(t, insideKey, data));
    cursor = index + literal.length;
    key = key + 1;
  }
  const nextPart = text.substring(cursor);
  if (nextPart) {
    explodedString.push(nextPart);
  }
  return explodedString.reduce(mergeRawStrings, []);
}

export function tReplace(t = (str) => str, mainKey, data) {
  if (!mainKey) {
    return '';
  }
  const fulltext = t(mainKey);
  const splitFulltext = fulltext.split('\n');
  return splitFulltext.map((singleText, index) => {
    let singleTextRefine = singleText.replace('\\n', '');
    return (
      <div className="txtNewline" key={index}>
        {tReplaceSingleText(t, singleTextRefine, data)}
      </div>
    );
  });
}
