const Paragraph: React.FC<React.HTMLProps<HTMLParagraphElement>> = ({ children, className, ...rest }) => {
    const defaultClasses = "tw-text-[#fff] tw-font-medium tw-text-sm tw-leading-7";
    const combinedClasses = `${defaultClasses} ${className || ""}`;

    return (
        <p className={combinedClasses} {...rest}>
            {children}
        </p>
    );
}

export default Paragraph;