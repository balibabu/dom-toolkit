function parseRules(text) {
    return text.split("\n").map(l => l.trim()).filter(Boolean);
}

chrome.storage.local.get(["rules"], (data) => {
    if (!data.rules) return;

    const domain = location.hostname;

    const cssRules = parseRules(data.rules.css || "");
    const blockRules = parseRules(data.rules.block || "");

    // BLOCK ELEMENTS
    blockRules.forEach(rule => {
        const [site, selector] = rule.split("##");
        if (!site || !selector) return;

        if (domain.includes(site)) {
            document.querySelectorAll(selector).forEach(el => el.remove());
        }
    });

    // CSS INJECTION
    cssRules.forEach(rule => {
        const [site, css] = rule.split("##");
        if (!site || !css) return;

        if (domain.includes(site)) {
            const style = document.createElement("style");
            style.textContent = css;
            document.documentElement.appendChild(style);
        }
    });
});