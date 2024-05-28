
export function CvSection({title, children}) {
  return (
    <section>
      <h2>{title}</h2>
      {children}
    </section>
  )
}