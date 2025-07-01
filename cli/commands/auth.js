

import inquirer from "inquirer";
import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";

const SESSION_PATH = path.resolve("./.session.json");

export async function login() {
  const { email, appPassword } = await inquirer.prompt([
    { type: "input", name: "email", message: "Enter your email address:" },
    { type: "password", name: "appPassword", message: "Enter your app password:" },
  ]);

 
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email,
      pass: appPassword,
    },
  });

  try {

    await transporter.sendMail({
      from: email,
      to: email,
      subject: "✅ Login Test from Availr",
      text: "Your email login is successful!",
    });

    fs.writeFileSync(SESSION_PATH, JSON.stringify({ email, appPassword }), "utf-8");
    console.log("✅ Login successful and verified with Gmail.");
    return { email, appPassword };

  } catch (error) {
    console.error("❌ Login failed: Invalid email or app password.");
    console.error(error.message);
    process.exit(1);
  }
}

export function getSession() {
  if (fs.existsSync(SESSION_PATH)) {
    return JSON.parse(fs.readFileSync(SESSION_PATH, "utf-8"));
  }
  throw new Error("❌ No session found. Please login first.");
}
