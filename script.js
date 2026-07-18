// ===========================
// PN2B Tracking
// ===========================

const trackBtn = document.getElementById("trackBtn");
const trackingInput = document.getElementById("trackingNumber");
const detectCourier = document.getElementById("detectCourier");
const selectedCourierNote = document.getElementById("selectedCourier");
const courierImages = document.querySelectorAll(".hero-couriers img");

const couriers = {
    flash: {
        name: "Flash Express",
        url: "https://www.flashexpress.com/fle/tracking",
        trackingParameter: "se"
    },
    jt: {
        name: "J&T Express",
        url: "https://www.jtexpress.co.th/index/query/gzquery.html",
        trackingParameter: "bills"
    },
    dhl: {
        name: "DHL Express",
        url: "https://www.dhl.com/th-th/home/tracking.html",
        query: {
            submit: "1"
        },
        trackingParameter: "tracking-id"
    },
    kex: {
        name: "KEX Express",
        url: "https://th.kex-express.com/th/track/",
        query: {
            action: "search"
        },
        trackingParameter: "code"
    },
    th: {
        name: "Thailand Post",
        url: "https://track.thailandpost.co.th/",
        trackingParameter: "trackNumber"
    }
};

let selectedCourier = "";

function showStatus(message) {
    const statusHeading = document.createElement("h3");

    statusHeading.textContent = message;
    detectCourier.replaceChildren(statusHeading);
}

function selectCourier(courierId) {
    const courier = couriers[courierId];

    if (!courier) {
        return;
    }

    courierImages.forEach((image) => image.classList.remove("active"));

    const selectedImage = document.querySelector(
        `.hero-couriers img[data-courier="${courierId}"]`
    );

    selectedImage?.classList.add("active");
    selectedCourier = courierId;

    if (selectedCourierNote) {
        selectedCourierNote.textContent = `เลือกแล้ว: ${courier.name}`;
    }
}

function buildTrackingUrl(courier, trackingNumber) {
    const trackingUrl = new URL(courier.url);

    Object.entries(courier.query ?? {}).forEach(([parameter, value]) => {
        trackingUrl.searchParams.set(parameter, value);
    });

    trackingUrl.searchParams.set(courier.trackingParameter, trackingNumber);

    return trackingUrl.toString();
}

courierImages.forEach((image) => {
    image.addEventListener("click", () => {
        selectCourier(image.dataset.courier);
    });
});

trackBtn.addEventListener("click", () => {
    const tracking = trackingInput.value.trim();

    if (tracking === "") {
        showStatus("กรุณากรอกเลขพัสดุ");
        trackingInput.focus();
        return;
    }

    const courier = couriers[selectedCourier];

    if (!courier) {
        showStatus("กรุณาเลือกบริษัทขนส่ง");
        return;
    }

    showStatus(`กำลังเปิดหน้าติดตามพัสดุของ ${courier.name}`);
    window.open(buildTrackingUrl(courier, tracking), "_blank", "noopener,noreferrer");
});
