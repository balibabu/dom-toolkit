const sites=[
    ['youtube.com', handleYouTube],
    ['chatgpt.com', handleChatGPT]
];


function handleYouTube() {
    console.log('you are on youtube.');
}

function handleChatGPT() {
    const rm = () => {
        // 1️⃣ Remove the modal if it exists
        const modal = document.getElementById("modal-no-auth-rate-limit");
        if (modal) alert('auth limiter is here.');
        if (modal) modal.remove();


        // 2️⃣ Re-enable scrolling on body & html
        document.body.style.overflow = "auto";
        document.documentElement.style.overflow = "auto";

        // 3️⃣ Remove any "wheel" and "touchmove" event listeners that block scrolling
        window.addEventListener("wheel", e => e.stopImmediatePropagation(), { capture: true });
        window.addEventListener("touchmove", e => e.stopImmediatePropagation(), { capture: true });

        // 4️⃣ Optional: remove pointer-events blocking
        document.body.style.pointerEvents = "auto";
    }
    new MutationObserver(rm).observe(document.body, { childList: true, subtree: true });
    console.log('MutationObserver loaded');
}