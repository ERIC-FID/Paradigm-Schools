
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function PageTitle() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const baseUrl = "https://paradigmschools.com.ng";

    let title = "Paradigm Schools Minna";
    let description =
      "Discover Paradigm Schools in Minna, Niger State. We provide quality nursery, primary and secondary education.";

    if (pathname === "/about" && hash === "#gallery") {
      title = "School Gallery | Paradigm Schools Minna";
      description =
        "Explore photos of school activities, events, competitions and student achievements at Paradigm Schools Minna.";
    } else if (pathname === "/about") {
      title = "About Us | Paradigm Schools Minna";
      description =
        "Learn about Paradigm Schools Minna, our educational programmes, achievements, values and commitment to academic excellence.";
    } else if (pathname === "/") {
      title =
        "Paradigm Schools Minna | Nursery, Primary & Secondary School";
      description =
        "Paradigm Schools Minna offers quality nursery, primary and secondary education in Niger State, Nigeria. Explore our academics and admissions.";
    }

    // Update page title
    document.title = title;

    // Update meta description
    let metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    // Update canonical URL
    let canonical = document.querySelector(
      'link[rel="canonical"]'
    );

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute(
      "href",
      baseUrl + pathname
    );

    // Update social sharing metadata
    const ogTags = {
      "og:title": title,
      "og:description": description,
      "og:url": baseUrl + pathname,
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(
        `meta[property="${property}"]`
      );

      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }

      tag.setAttribute("content", content);
    });
  }, [pathname, hash]);

  return null;
}
