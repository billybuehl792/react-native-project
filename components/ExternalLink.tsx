import { Href, Link } from "expo-router";
import { openBrowserAsync } from "expo-web-browser";
import { type ComponentProps } from "react";
import { Platform } from "react-native";

interface ExternalLinkProps extends Omit<ComponentProps<typeof Link>, "href"> {
  href: string;
}

const ExternalLink: React.FC<ExternalLinkProps> = ({ href, ...props }) => {
  return (
    <Link
      target="_blank"
      {...props}
      href={href as Href<string>}
      onPress={async (event) => {
        if (Platform.OS !== "web") {
          // Prevent the default behavior of linking to the default browser on native.
          event.preventDefault();
          // Open the link in an in-app browser.
          await openBrowserAsync(href);
        }
      }}
    />
  );
};

export default ExternalLink;
