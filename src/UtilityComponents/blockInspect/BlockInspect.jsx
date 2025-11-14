import { useEffect } from "react";

function BlockInspect(redirect = "/") {
    useEffect(() => {
        const REDIRECT = redirect;
        let triggered = false;

        const safeRedirect = () => {
            if (!triggered) {
                triggered = true;
                clearInterval(sizeInterval);
                clearInterval(dbgInterval);
                document.removeEventListener("contextmenu", onContext);
                document.removeEventListener("keydown", onKey);
                window.location.href = REDIRECT;
            }
        };

        const onContext = (e) => e.preventDefault();
        const onKey = (e) => {
            if (
                e.key === "F12" ||
                e.keyCode === 123 ||
                (e.ctrlKey && e.shiftKey && ["I", "i", "J", "j"].includes(e.key)) ||
                (e.ctrlKey && ["U", "u", "S", "s"].includes(e.key)) ||
                (e.metaKey && e.altKey && ["I", "i"].includes(e.key))
            ) {
                e.preventDefault();
                safeRedirect();
            }
        };

        document.addEventListener("contextmenu", onContext);
        document.addEventListener("keydown", onKey, { passive: false });

        const threshold = 160;
        const sizeInterval = setInterval(() => {
            if (
                (window.outerWidth - window.innerWidth > threshold ||
                    window.outerHeight - window.innerHeight > threshold) &&
                !triggered
            ) {
                safeRedirect();
            }
        }, 600);

        const dbgInterval = setInterval(() => {
            const start = Date.now();
            for (let i = 0; i < 50000; i++) { } // busy loop
            if (Date.now() - start > 200 && !triggered) {
                safeRedirect();
            }
        }, 2000);

        return () => {
            triggered = true;
            clearInterval(sizeInterval);
            clearInterval(dbgInterval);
            document.removeEventListener("contextmenu", onContext);
            document.removeEventListener("keydown", onKey);
        };
    }, [redirect]);
}

export default BlockInspect;
