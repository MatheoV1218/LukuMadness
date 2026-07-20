import { Helmet } from "react-helmet-async";

const SITE_URL = "https://www.lukumadnessusa.com";
const DEFAULT_IMAGE = `${SITE_URL}/publiclukulogo.png`;

type Props = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

const SEO = ({ title, description, path, image = DEFAULT_IMAGE }: Props) => {
  const url = `${SITE_URL}${path}`;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:type" content="website" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;
