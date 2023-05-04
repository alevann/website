import './Text.scss'

type RecursivePartial<T> = {
  [P in keyof T]?: RecursivePartial<T[P]>;
};

type Props = RecursivePartial<HTMLElement> & {
  type?: 'heading' | 'body'
  elem?: 'h1' | 'h2' | 'span' | 'p'
  size?: 'xLarge' | 'large' | 'normal'
  gutterBottom?: boolean
  children?: string
}

const Text = ({
  elem: Element = 'p',
  type = 'body',
  size = 'normal',
  className = '',
  gutterBottom = false,
  children,
  ...elemProps
}: Props) => {
  const classes = Array.isArray(className) ? className : [className]
  classes.push(`terra-text`)
  classes.push(`terra-text-${type}`)
  classes.push(`terra-text-${size}`)
  gutterBottom && classes.push('terra-text-gutter-bottom')

  return (
    <Element {...elemProps} className={classes.join(' ')}>
      {children}
    </Element>
  )
}

export default Text
