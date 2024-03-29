import { Button } from "@/components/button";
import { H1, H2 } from "@/components/typography";
import { Text } from "@/components/text";
import { Link } from "expo-router";
import React from "react";
import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Page() {
  return (
    <View className="flex flex-1">
      <Content />
    </View>
  );
}

function Content() {
  return (
    <View className="flex-1">
      <View className="py-12 md:py-24 lg:py-32 xl:py-48">
        <View className="container px-4 md:px-6">
          <View className="flex flex-col items-center gap-4 text-center">
            <H1>Expo share intent</H1>
            <H2>Test</H2>
            <Button>
              <Text>Default</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}
