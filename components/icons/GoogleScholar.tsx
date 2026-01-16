export function GoogleScholar({ size = 20 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.8}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {/* mortarboard top */}
      <path d="M12 3L1 9l11 6 11-6-11-6z" />

      {/* head / base */}
      <path d="M5 13v4c0 1.5 3.6 3 7 3s7-1.5 7-3v-4" />
    </svg>
  )
}
