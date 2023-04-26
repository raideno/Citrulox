const notificationsContainer = document.getElementById("notifications");

export const appendNotifications = (text) => {
    const notification = document.createElement("div");

    notification.classList.add("notification");
    notification.innerText = text;

    notification.addEventListener('click', () => {
        notificationsContainer.removeChild(notification);
    })

    notificationsContainer.appendChild(notification);
}

export default "notifications";