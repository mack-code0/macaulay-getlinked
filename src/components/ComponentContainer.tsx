const ComponentContainer: React.FC<React.HTMLProps<HTMLDivElement>> = ({ children, className, ...rest }) => {
    const defaultClasses = "tw-px-4 md:tw-px-[100px] tw-bg-darkPurple";
    const combinedClasses = `${defaultClasses} ${className || ""}`;

    return (
        <div className={combinedClasses} {...rest}>
            {children}
        </div>
    );
}

export default ComponentContainer;