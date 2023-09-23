const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({ children, className, ...rest }) => {
    const defaultClasses = "tw-rounded-[4px] tw-bg-primary2 tw-font-montserrat hover:tw-bg-primary tw-text-xs tw-text-white tw-px-8 tw-py-3 tw-font-semibold tw-cursor-pointer"
    const combinedClasses = `${defaultClasses} ${className || ""}`;

    return (<button className={combinedClasses} {...rest}>
        {children}
    </button>);
}

export default Button;