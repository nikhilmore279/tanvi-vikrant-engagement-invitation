const calendarLink = document.querySelector(".calendar-link");

if (calendarLink) {
	const calendarText = [
		"BEGIN:VCALENDAR",
		"VERSION:2.0",
		"PRODID:-//Tanvi and Vikrant//Engagement Invitation//EN",
		"CALSCALE:GREGORIAN",
		"BEGIN:VEVENT",
		`DTSTAMP:${new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}/, "")}`,
		"DTSTART:20261025T113000Z",
		"SUMMARY:Tanvi & Vikrant Engagement Ceremony",
		"LOCATION:Amivadi Banquet Hall, 1st Floor, Rajni House, Chandavarkar Rd, Borivali West, Mumbai, Maharashtra 400091",
		"DESCRIPTION:Engagement celebration for Tanvi and Vikrant. 5 PM onwards.",
		"END:VEVENT",
		"END:VCALENDAR"
	].join("\r\n");
	const calendarFile = new Blob([calendarText], { type: "text/calendar;charset=utf-8" });
	calendarLink.href = URL.createObjectURL(calendarFile);
	calendarLink.download = "tanvi-vikrant-engagement.ics";
}

const pageUrl = encodeURIComponent(window.location.href);
const shareText = encodeURIComponent("Join us to celebrate Tanvi & Vikrant on October 25, 2026!");
document.querySelector('[data-share="facebook"]')?.setAttribute("href", `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`);
document.querySelector('[data-share="whatsapp"]')?.setAttribute("href", `https://wa.me/?text=${shareText}%20${pageUrl}`);
