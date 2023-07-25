export default function Button({
  bgColor,
  textColor,
  bRadius,
  onClick,
  cursor,
  width,
  padding,
  children,
  fontSize,
  disabled = false,
}) {
  return (
    <button
      className={disabled ? "disbled-btn" : ""}
      style={{
        backgroundColor: bgColor,
        color: textColor,
        borderRadius: bRadius,
        cursor: cursor,
        width: width,
        padding: padding,
        border: "none",
        textTransform: "uppercase",
        fontWeight: 700,
        fontSize:fontSize
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
