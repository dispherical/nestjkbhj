export default function unapproved_home(
  name: string,
  username: string,
  email: string,
  ssh_key: string,
) {
  return {
    type: "home" as const,
    blocks: [
      {
        type: "header",
        text: {
          type: "plain_text",
          text: "Quetzal",
        },
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: "Your Nest account is pending approval! If you have any questions, ask in the #nest-help channel. Here's your profile:",
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Nest Username:* ${username}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Full Name:* ${name}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*Email:* ${email}`,
        },
      },
      {
        type: "divider",
      },
      {
        type: "section",
        text: {
          type: "mrkdwn",
          text: `*SSH Public Key:* \`${ssh_key}\``,
        },
      },
    ],
  };
}
