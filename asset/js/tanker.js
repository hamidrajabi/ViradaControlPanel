let tankersData = [
    {
        id: 1,
        name: "تانکر 1",
        level: 100,
        volume: 150,
        speed: 13,
        date: '1401-12-21 12:37:01',
        heights: 140,
        presetVolume: 170
    },

    {
        id: 2,
        name: "تانکر 2",
        level: 200,
        volume: 250,
        speed: 23,
        date: '1401-12-21 12:37:01',
        heights: 240,
        presetVolume: 270
    },

    {
        id: 3,
        name: "تانکر 3",
        level: 300,
        volume: 350,
        speed: 33,
        date: '1401-12-21 12:37:01',
        heights: 340,
        presetVolume: 370
    },

    {
        id: 4,
        name: "تانکر 4",
        level: 400,
        volume: 450,
        speed: 43,
        date: '1401-12-21 12:37:01',
        heights: 440,
        presetVolume: 470
    },

]


const handleTanker = () => {
    // async function fetchData(){
    //     await fetch("https://viradaco.ir/getapi/tanker")
    //     .then(response => response.json())
    //     .then(data => tankersData=data)
    // }

    const containerTankers = document.querySelector("#container-tankers");
    tankersData.forEach((tanker) => {
        containerTankers.insertAdjacentHTML("beforeend",
        `<div class="flex flex-col justify-between items-center shadow-lg p-2 pr-6 sm:pr-2 rounded-lg">
            <h2 class="text-xl mt-2 mb-8 sm:mb-4">${tanker.name}</h2>
            <div class="flex">
                <div class="w-1/2 sm:w-1/3 md:w-1/2 lg:w-1/3 mr-2 relative flex flex-col items-center h-fit overflow-hidden">
                    <span class="z-20 bg-white w-full flex justify-center" >${tanker.heights}</span>
                    <img class="z-10" src="../asset/image/tanker-new.png" alt="tanker-1">
                    <div id="level-tank-1" class="absolute bottom-0 h-[50%] w-full bg-blue-400">
                        <div class="wave-container -top-6"></div>
                    </div>
                </div>
                <div class="flex flex-col self-center gap-4 mt-4">
                    <div class="w-[150px] h-[30px] skew-x-[-20deg] border-t-2 border-l-4 border-blue-400 relative">
                        <span class="absolute -top-6 text-sm"><span>${tanker.level} cm</span> : ارتفاع آب</span>
                    </div>
                    <div class="w-[150px] h-[30px] skew-x-[-20deg] border-t-2 border-l-4 border-blue-400 relative">
                        <span class="absolute -top-6 text-sm"><span>${tanker.volume} Lit</span> : حجم آب</span>
                    </div>
                    <div class="w-[150px] h-[30px] skew-x-[-20deg] border-t-2 border-l-4 border-blue-400 relative">
                        <span class="absolute -top-6 text-sm"><span>${tanker.speed} cm</span> : سرعت پر شدن</span>
                    </div>
                    <div class="w-[150px] h-[20px] skew-x-[-20deg] border-t-2 border-l-4 border-blue-400 relative">
                        <span class="absolute -top-6 text-sm">${tanker.date}</span>
                    </div>
                </div>
            </div>
            <form class="flex flex-row-reverse items-end gap-8 mt-4 self-start ">
                <div dir="rtl" class="flex flex-col gap-2">
                    <input class="rounded-lg h-[35px] p-2 border-0 outline-0 bg-gray-100" type="number"
                        name="set-volume-1" id="set-volume-1" placeholder="تعیین حجم آب" value="${tanker.presetVolume ? tanker.presetVolume:null}">
                </div>
                <button type="submit" class="w-fit px-4 py-2 h-[35px] rounded-lg bg-yellow-400">تایید</button>
            </form>
        </div>`
        )
    })

}
handleTanker()
// setInterval(handleTanker,1000)