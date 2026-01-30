export default function ImageCredit({ author, url, webSite }) {
  return (
    <span className="text-[10px] text-white/60">
      Foto de{" "}
      <a
        href={author.url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white"
      >
        {author.name}
      </a>{" "}
      en{" "}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-white"
      >
        {webSite}
      </a>
    </span>
  );
}
