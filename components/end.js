export function End(props) {
  const message = props.resultsSent
    ? 'Thank you for your participation. You may now close this window.'
    : 'Submitting your session...';

  return (
    <>
      <h2>{message}</h2>
    </>
  );
}
