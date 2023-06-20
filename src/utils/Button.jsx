export default function Button({
  bgColor,
  textColor,
  bRadius,
  onClick,
  cursor,
  width,
  padding,
  children,
}) {
  return (
    <button
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
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
