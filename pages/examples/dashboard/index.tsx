import { Center, Text } from "@yamada-ui/react"
import { memo } from "react"
// import { useI18n } from "contexts/i18n-context"

export const Dashboard = memo(() => {
  // const { t } = useI18n()

  return (
    <Center minH="lg">
      <Text color="muted">Coming soon!</Text>
    </Center>
  )
})

Dashboard.displayName = "Dashboard"