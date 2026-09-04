/**
 * Renders a JSON-LD <script> tag. Accepts a single schema object (typically a
 * `graph(...)` document) and escapes `<` so the payload cannot break out of the
 * script element.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
