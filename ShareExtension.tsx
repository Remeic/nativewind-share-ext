import { Text } from "@/components/text";
import { Button } from "@/components/button";
import { H1, H2 } from "@/components/typography";
import { close } from "expo-share-extension";
import { View } from "react-native";
import { verifyInstallation } from "nativewind";

// if ShareExtension is your root component, url is available as an initial prop
export default function ShareExtension({ url }: { url: string }) {
  verifyInstallation();
  return (
    <View className="flex-1">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="container px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <H1>Expo share intent</H1>
            <H2>Test</H2>
            <Button>
              <Text>Close</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
