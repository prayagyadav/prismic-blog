import { NextResponse } from "next/server"
import fetch from "isomorphic-fetch"

export async function POST(req) {
  const email = req.body

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 500 })
  }

  try {
    const LIST_ID = process.env.MAILCHIMP_LIST_ID
    const API_KEY = process.env.MAILCHIMP_API_KEY
    const DATACENTER = API_KEY.split("-")[1]

    console.log(email)

    const data = {
      email_address: email,
      status: "subscribed"
    }

    const response = await fetch(
      `https://${DATACENTER}.api.mailchimp.com/3.0/lists/${LIST_ID}/members`,
      {
        body: JSON.stringify(data),
        headers: {
          Authorization: `apikey ${API_KEY}`,
          "Content-Type": "application/json"
        },
        method: "POST"
      }
    )

    if (response.status >= 400) {
      return NextResponse.json(
        {
          error:
            "There was an error subscribing to the newsletter. Shoot me an email at [prayagyadav206@gmail.com] and I will add you to the list the old-fashioned way."
        },
        { status: 400 }
      )
    }

    return NextResponse.json({ error: "" }, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: error.message || error.toString() },
      { status: 500 }
    )
  }
}
