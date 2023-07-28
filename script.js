document.addEventListener("DOMContentLoaded", function () {
    const chatLog = document.getElementById("chat-log");
    const userInput = document.getElementById("user-input");

    function appendMessage(message, isUser) {
        const messageDiv = document.createElement("div");
        messageDiv.className = isUser ? "user-message" : "bot-message";
        messageDiv.innerText = message;
        chatLog.appendChild(messageDiv);
    }

    function scrollToBottom() {
        chatLog.scrollTop = chatLog.scrollHeight;
    }

    function sendMessage() 
    {
        const userMessage = userInput.value.trim();
        if (userMessage !== "") {
            appendMessage(userMessage, true);
            userInput.value = "";
            scrollToBottom();

            // Respuesta automatizada del chatbot (puedes personalizar las respuestas aquí)
            setTimeout(function () {
                let botMessage;
                if (userMessage.toLowerCase().includes("costo")) {
                    botMessage = "El costo del servicio dependerá del tipo de servicio que requieras. Por favor, contáctanos para obtener un presupuesto personalizado.";
                } else {
                    botMessage = "Gracias por tu mensaje. Nos pondremos en contacto contigo pronto.";
                
                }
                appendMessage(botMessage, false);
                scrollToBottom();
            }, 500);
        }
    }
    
    userInput.addEventListener("keyup", function (event) {
        if (event.key === "Enter") {
            sendMessage();
        }
    });
});

