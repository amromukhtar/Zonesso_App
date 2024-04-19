import { useEffect } from "react";
import { StyleSheet, AppState, AppStateStatus, Platform } from "react-native";
import {
  QueryClient,
  QueryClientProvider,
  focusManager,
} from "@tanstack/react-query";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { AppThemeProvider } from "@/theme/AppThemeProvider";
import { PortalProvider } from "@gorhom/portal";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { RootNavigation } from "@/navigation";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: 2 } },
});

function onAppStateChange(status: AppStateStatus) {
  if (Platform.OS !== "web") {
    focusManager.setFocused(status === "active");
  }
}

export default function App() {
  useEffect(() => {
    const subscription = AppState.addEventListener("change", onAppStateChange);

    return () => subscription.remove();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <GestureHandlerRootView style={styles.container}>
        <PortalProvider>
          <SafeAreaProvider>
            <AppThemeProvider>
              <RootNavigation />
            </AppThemeProvider>
          </SafeAreaProvider>
        </PortalProvider>
      </GestureHandlerRootView>
    </QueryClientProvider>
  );
}
