"use client"
import { useState } from "react";

export default function EmailSubscriptionForm() {
	const [email, setEmail] = useState("");
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
	const [errorMessage, setErrorMessage] = useState("");

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");
		setErrorMessage("");

		if (!email || !/\S+@\S+\.\S+/.test(email)) {
			setStatus("error");
			setErrorMessage("Please enter a valid email address.");
			return;
		}

		try {
			const response = await fetch("https://your-odoo-domain.com/website_form/subscribe", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({ email }),
			});

			if (response.ok) {
				setStatus("success");
				setEmail("");
			} else {
				throw new Error("Something went wrong. Please try again.");
			}
		} catch (error: any) {
			setStatus("error");
			setErrorMessage(error.message || "Failed to subscribe.");
		}
	};

	return (
		<form onSubmit={handleSubmit} className="max-w-4xl w-full mx-auto bg-zinc-800 rounded-2xl space-y-8 p-4 lg:p-24">
			<h2 className="text-xl font-semibold text-gray-white">Enter your email to get the Checklist now</h2>
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				placeholder="Enter your email"
				className="w-full px-4 h-16 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
				required
			/>
			<button
				type="submit"
				disabled={status === "loading"}
				className="w-full h-16 px-4 bg-red-500 text-white rounded-lg hover:bg-orange-300 disabled:opacity-50"
			>
				{status === "loading" ? "Subscribing..." : "Subscribe"}
			</button>

			{status === "success" && <p className="text-green-600 text-sm">Thank you for subscribing!</p>}
			{status === "error" && <p className="text-red-600 text-sm">{errorMessage}</p>}
		</form>
	);
}
