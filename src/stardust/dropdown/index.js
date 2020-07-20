// @flow
import * as React from 'react';
import cx from 'classnames';
import invariant from 'invariant';

import './style.scss';

type DropdownPropType = {
  /**
   * Custom classname for the wrapper element
   */
  className?: string,
  /**
   * Element to be rendered as the header of the dropdown. Header is clickable and will toggle show/hide for the body
   */
  header: ?(string | React$Element<*>),
  /**
   * Element(s) to be rendered as the content. It will be shown/hidden depending on the state
   */
  body: React$Element<*> | React$Element<*>[] | null,
  /**
   * [DEPRECATED] Should use `open` property instead
   */
  openInitially?: boolean,
  /**
   * Decides whether content is shown or hidden. Content is shown if it is true and hidden if it is false/undefined, except if the component is used as an uncontrolled component (see openInitially props)
   */
  open?: boolean,
  /**
   * Callback to be triggered when header is clicked. Current open state is passed as parameter isOpen, and click event is passed as event
   */
  onToggle?: Function,
};

export default class Dropdown extends React.Component<
  DropdownPropType,
  {
    open: boolean,
  }
> {
  _body: ?HTMLElement;

  constructor(props: DropdownPropType) {
    invariant(
      props.header !== null && props.header !== undefined,
      '`header` should not be null or undefined'
    );
    invariant(
      props.body !== null && props.body !== undefined,
      '`body` should not be null or undefined'
    );
    super(props);
    this.state = {
      open: !!(this.hasProp('open') ? props.open : props.openInitially),
    };
    (this: any).toggle = this.toggle.bind(this);
  }

  UNSAFE_componentWillReceiveProps(nProps: DropdownPropType) {
    if (nProps.open !== this.props.open) {
      this.animate();
      this.setState({
        open: !!nProps.open,
      });
    }
  }

  render() {
    const { header, body, className } = this.props;
    return (
      <div
        className={cx('stardust-dropdown', className, {
          'stardust-dropdown--open': this.state.open,
        })}
      >
        <div className="stardust-dropdown__item-header" onClick={this.toggle}>
          {header}
        </div>
        <div
          className={cx('stardust-dropdown__item-body', {
            'stardust-dropdown__item-body--open': this.state.open,
          })}
          ref={ref => (this._body = ref)}
        >
          {body}
        </div>
      </div>
    );
  }

  hasProp(propName: string): boolean {
    const propVal = this.props[propName];
    return propVal !== null && typeof propVal !== 'undefined';
  }

  /**
   * Smoothly animating the height of dropdown
   * https://aerotwist.com/blog/flip-your-animations/
   */
  animate() {
    const el = this._body;
    if (!el) {
      return;
    }
    const { open } = this.state;
    let lastHeight;
    if (open) {
      const firstHeight = el.getBoundingClientRect().height;
      el.style.height = `${firstHeight}px`;
      el.style.opacity = '1';
      el.classList.remove('stardust-dropdown__item-body--open');
      lastHeight = 0;
    } else {
      el.classList.add('stardust-dropdown__item-body--open');
      lastHeight = el.getBoundingClientRect().height;
      el.style.height = '0px';
      el.style.opacity = '0';
    }
    // clear the inline style attribute `height` to allow content expanding after animation
    el.addEventListener('transitionend', function() {
      el.style.height = '';
    });

    // force a browser re-flow, let the start height kick in.
    // this line make sure style change not get batched, and the transition was applied.
    el.getBoundingClientRect();

    requestAnimationFrame(() => {
      el.style.height = `${lastHeight}px`;

      el.style.opacity = open ? '0' : '1';
    });
  }
  toggle(e: SyntheticEvent<*>) {
    if (typeof this.props.onToggle === 'function') {
      this.props.onToggle(this.state.open, e);
    }
    if (!this.hasProp('open')) {
      this.animate();
      this.setState(prevState => ({
        open: !prevState.open,
      }));
    }
  }
}
