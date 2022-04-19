if(window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches){
    alert("Hey, that's dark Mode!")
} 

function LightNightTheme() {

    const date = new Date();
    const hour = date.getHours();

    if((hour > 8) && (hour < 17)){
        document.documentElement.style.setProperty("--background-color", "#f1f1f1");
        document.documentElement.style.setProperty("--base-text-color", "#323232");
    } else {
        document.documentElement.style.setProperty("--background-color", "#323232");
        document.documentElement.style.setProperty("--base-text-color", "#f1f1f1");
    };

    console.log("ye it's just lazy");
};

LightNightTheme();