import styles from "./Loader.module.css";

export default function Loading() {
  return (
    <div className={styles.spinner}>
      <svg
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 50 50"
        width="100"
        height="100"
      >
        <circle
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="31.4 31.4"
          transform="rotate(-90 25 25)"
        >
          <animateTransform
            attributeName="transform"
            type="rotate"
            from="0 25 25"
            to="360 25 25"
            dur="0.5s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
}
