import type * as React from "react"

interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "success" | "warning" | "error" | "destructive"
  children: React.ReactNode
}

export function Alert({ className = "", variant = "default", children, ...props }: AlertProps) {
  const baseStyles = "p-4 rounded-md border"

  const variants = {
    default: "bg-blue-50 border-blue-200 text-blue-800",
    success: "bg-green-50 border-green-200 text-green-800",
    warning: "bg-yellow-50 border-yellow-200 text-yellow-800",
    error: "bg-red-50 border-red-200 text-red-800",
    destructive: "bg-red-50 border-red-200 text-red-800",
  }

  const classes = `${baseStyles} ${variants[variant]} ${className}`

  return (
    <div className={classes} {...props}>
      {children}
    </div>
  )
}

export function AlertTitle({ className = "", children, ...props }: React.HTMLAttributes<HTMLHeadingElement>) {
  const classes = `font-medium mb-1 ${className}`

  return (
    <h4 className={classes} {...props}>
      {children}
    </h4>
  )
}

export function AlertDescription({ className = "", children, ...props }: React.HTMLAttributes<HTMLParagraphElement>) {
  const classes = `text-sm ${className}`

  return (
    <p className={classes} {...props}>
      {children}
    </p>
  )
}
