import { Group, Anchor } from '@mantine/core'

const social_links = [
  { text: 'GitHub', url: 'https://github.com/TheKeveloper' },
  { text: 'Email', url: 'mailto:keveloper@gmail.com' },
  { text: 'LinkedIn', url: 'https://www.linkedin.com/in/kevin-bi-006426148/' },
  { text: 'StackOverflow', url: 'https://stackoverflow.com/users/8371811/keveloper' },
]

export function SocialBar() {
  return (
    <Group justify="center" gap="xl" mb="xs">
      {social_links.map((link) => (
        <Anchor
          key={link.text}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          fw={700}
          size="lg"
        >
          {link.text}
        </Anchor>
      ))}
    </Group>
  )
}
