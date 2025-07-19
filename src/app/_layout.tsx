import { Stack } from "expo-router"
import { Header } from "react-native/Libraries/NewAppScreen"
import { colors } from "@/styles/colors"


export default function Layout() {

    const backgroundColor = colors.gray[950]
    return (
        <Stack screenOptions={{
            headerShown: false,
            contentStyle: { backgroundColor },
        }}/>
    )
}