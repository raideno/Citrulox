const notificationsContainer = document.getElementById("notifications");

const appendNotifications = (text) => {
    const notification = document.createElement("div");

    notification.classList.add("notification");
    notification.innerText = text;

    notification.addEventListener('click', () => {
        notificationsContainer.removeChild(notification);
    })

    notificationsContainer.appendChild(notification);
}

appendNotifications("Promotion Exclusive, -25% !");

export default "notifications";