import type * as React from "react"

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode
}

export function Card({ className = "", children, ...props }: CardProps) {
  const classes = ` rounded-lg shadow-sm ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardHeader({ className = "", children, ...props }: CardProps) {
  const classes = `px-6 py-4 ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardContent({ className = "", children, ...props }: CardProps) {
  const classes = `px-6 py-4 ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function CardFooter({ className = "", children, ...props }: CardProps) {
  const classes = `px-6 py-4 border-t border-gray-200 ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}
