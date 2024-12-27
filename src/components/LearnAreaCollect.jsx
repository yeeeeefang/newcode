import React, { useState, useEffect } from 'react';
import '../assets/css/LearnAreaCollect.css';

const LearnAreaCollect = () => {
    const [showCollectYes, setShowCollectYes] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [isAnimating, setIsAnimating] = useState(false); // 控制動畫的狀態

    const handleAnimation = () => {
      if (isAnimating) return; // 防止重複觸發動畫
      setIsAnimating(true); // 添加動畫
      setTimeout(() => {
        setIsAnimating(false); // 動畫結束後移除狀態
      }, 1000); // 時間與動畫持續時間一致
    };

    const collectScroll = () => {
        const scrollTop = window.scrollY; // 當前滾動距離
        const viewportHeight = window.innerHeight; // 視口高度
        const documentHeight = document.body.scrollHeight; // 文件總高度
        const remainingHeight = documentHeight - (scrollTop + viewportHeight); // 頂部剩餘高度
    
        // 顯示條件：滾動超過 80vh 且頂部剩餘高度大於 250px
        if (scrollTop > viewportHeight * 0.8 && remainingHeight > 250) {
            setIsShow(true);
        } else {
            setIsShow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', collectScroll);
        return () => {
            window.removeEventListener('scroll', collectScroll);
        };
    }, []);

    return (
        <>
        {isShow && (
            <div className={`collectbox ${isShow ? 'collectShow' : ''}`}>
            <div className="collectimage"
                onClick={() => setShowCollectYes(!showCollectYes)}
            >
                {showCollectYes ? (
                    <svg onClick={handleAnimation} width="120" height="93" viewBox="0 0 120 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M62.7943 28.8512C62.1538 30.2768 62.0903 31.2466 62.5494 32.5951C63.9265 36.6408 75.905 31.6597 75.905 31.6597L76.15 27.9158C76.15 27.9158 64.7159 24.5745 62.7943 28.8512Z" fill="#F498C1" />
                        <path d="M109.724 38.0947C110.475 36.9068 110.737 35.9613 110.734 34.4446C110.728 29.8945 101.591 30.4502 101.591 30.4502L100.581 34.1002C100.581 34.1002 107.472 41.6582 109.724 38.0947Z" fill="#F498C1" />
                        <path d="M102.19 6.72382L72.8516 0.897523L73.435 51.9898L104.527 58.1642L102.19 6.72382Z" fill="#F498C1" />
                        <path d="M97.5187 18.1619C97.9946 15.7654 96.6883 13.4866 94.6011 13.0721C92.5138 12.6576 90.436 14.2643 89.9601 16.6608L89.2972 19.9987C88.8213 22.3952 90.1276 24.674 92.2148 25.0885C94.3021 25.503 96.3799 23.8963 96.8558 21.4998L97.5187 18.1619Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M90.7162 19.5146L90.7037 19.5235L92.5728 22.7174L95.6563 20.5429L95.6509 20.5337C95.7118 20.4994 95.7717 20.4615 95.8305 20.4201C96.7782 19.7517 97.0703 18.3962 96.4828 17.3923C95.9293 16.4466 94.7926 16.1505 93.8704 16.6782C93.2422 15.8447 92.1066 15.6547 91.2268 16.2751C90.2791 16.9434 89.9871 18.299 90.5745 19.3028C90.6182 19.3775 90.6656 19.4481 90.7162 19.5146Z" fill="black" />
                        <path d="M86.2121 15.9165C86.688 13.52 85.3818 11.2413 83.2945 10.8268C81.2073 10.4123 79.1294 12.019 78.6535 14.4155L77.9907 17.7534C77.5147 20.1499 78.821 22.4287 80.9082 22.8432C82.9955 23.2577 85.0734 21.6509 85.5493 19.2544L86.2121 15.9165Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M79.4077 17.2689L79.3952 17.2777L81.2644 20.4716L84.3478 18.2972L84.3425 18.288C84.4033 18.2537 84.4633 18.2158 84.5221 18.1744C85.4698 17.506 85.7618 16.1505 85.1743 15.1466C84.6208 14.2009 83.4842 13.9048 82.562 14.4325C81.9337 13.599 80.7981 13.409 79.9183 14.0294C78.9706 14.6977 78.6786 16.0533 79.266 17.0571C79.3098 17.1318 79.3571 17.2024 79.4077 17.2689Z" fill="black" />
                        <rect y="32.2422" width="120" height="60" rx="30" fill="#70CCF6" />
                        <path d="M74.8 71.0022C74.4933 71.0022 74.2267 70.9089 74 70.7222C73.7733 70.5355 73.66 70.2555 73.66 69.8822V65.5222C73.1267 65.7089 72.5467 65.9089 71.92 66.1222C71.2933 66.3222 70.72 66.5089 70.2 66.6822C69.8 66.8155 69.46 66.8089 69.18 66.6622C68.9 66.5155 68.7 66.2755 68.58 65.9422C68.46 65.6089 68.4733 65.3022 68.62 65.0222C68.78 64.7289 69.0467 64.5355 69.42 64.4422L69.76 64.3422V55.7622C69.76 55.4155 69.8667 55.1489 70.08 54.9622C70.3067 54.7622 70.5667 54.6622 70.86 54.6622C71.1667 54.6622 71.4267 54.7622 71.64 54.9622C71.8667 55.1489 71.98 55.4155 71.98 55.7622V63.6822C72.2733 63.5889 72.56 63.5022 72.84 63.4222C73.1333 63.3289 73.4067 63.2355 73.66 63.1422V53.5622C73.66 53.1889 73.7733 52.9089 74 52.7222C74.2267 52.5355 74.4933 52.4422 74.8 52.4422C75.1067 52.4422 75.3667 52.5355 75.58 52.7222C75.8067 52.9089 75.92 53.1889 75.92 53.5622V60.2422C75.9333 60.2289 75.94 60.2155 75.94 60.2022C75.9533 60.1889 75.9667 60.1755 75.98 60.1622C76.4333 59.5089 76.86 58.7822 77.26 57.9822C77.66 57.1822 78.02 56.3689 78.34 55.5422C78.66 54.7022 78.9133 53.9289 79.1 53.2222C79.1933 52.8889 79.3667 52.6422 79.62 52.4822C79.8867 52.3222 80.18 52.2889 80.5 52.3822C80.8067 52.4622 81.0333 52.6222 81.18 52.8622C81.3267 53.0889 81.36 53.3622 81.28 53.6822C81.1733 54.1222 81.04 54.5755 80.88 55.0422C80.72 55.5089 80.5467 55.9822 80.36 56.4622H86.26C86.58 56.4622 86.8333 56.5622 87.02 56.7622C87.2067 56.9622 87.3 57.2089 87.3 57.5022C87.3 57.7955 87.2067 58.0422 87.02 58.2422C86.8333 58.4422 86.58 58.5422 86.26 58.5422H85.1C84.9 61.1555 84.2667 63.4489 83.2 65.4222C84.2 66.5555 85.38 67.5555 86.74 68.4222C87.0467 68.6089 87.2267 68.8689 87.28 69.2022C87.3333 69.5355 87.26 69.8422 87.06 70.1222C86.86 70.4155 86.5733 70.5889 86.2 70.6422C85.84 70.6955 85.5 70.6022 85.18 70.3622C84.5933 69.9089 84.0267 69.4355 83.48 68.9422C82.9333 68.4355 82.42 67.8955 81.94 67.3222C80.94 68.5889 79.6667 69.6555 78.12 70.5222C77.8267 70.6822 77.52 70.7422 77.2 70.7022C76.88 70.6622 76.6267 70.4889 76.44 70.1822C76.28 69.9155 76.2333 69.6355 76.3 69.3422C76.3667 69.0489 76.5467 68.8289 76.84 68.6822C77.6133 68.2555 78.3067 67.7689 78.92 67.2222C79.5467 66.6755 80.0933 66.0822 80.56 65.4422C80.0933 64.6955 79.6733 63.9089 79.3 63.0822C78.94 62.2422 78.6467 61.3489 78.42 60.4022C78.3267 60.5355 78.2333 60.6755 78.14 60.8222C78.06 60.9689 77.9733 61.1089 77.88 61.2422C77.7067 61.4955 77.4667 61.6622 77.16 61.7422C76.8667 61.8222 76.5867 61.7755 76.32 61.6022C76.2267 61.5489 76.1467 61.4889 76.08 61.4222C76.0267 61.3555 75.9733 61.2822 75.92 61.2022V69.8822C75.92 70.2555 75.8067 70.5355 75.58 70.7222C75.3667 70.9089 75.1067 71.0022 74.8 71.0022ZM81.76 63.3622C82.0933 62.6289 82.3533 61.8622 82.54 61.0622C82.74 60.2489 82.8667 59.4089 82.92 58.5422H80.16C80.4 60.3289 80.9333 61.9355 81.76 63.3622ZM91.1 70.8222C90.86 70.6889 90.7133 70.4889 90.66 70.2222C90.62 69.9689 90.6667 69.7289 90.8 69.5022C91.2267 68.8355 91.5467 68.1422 91.76 67.4222C91.9733 66.6889 92.12 65.8955 92.2 65.0422H91.3C91.2467 65.7489 91.12 66.4422 90.92 67.1222C90.7333 67.7889 90.4467 68.4289 90.06 69.0422C89.9267 69.2555 89.7333 69.3955 89.48 69.4622C89.24 69.5289 89.0067 69.5022 88.78 69.3822C88.54 69.2489 88.3933 69.0622 88.34 68.8222C88.3 68.5822 88.3533 68.3489 88.5 68.1222C88.8333 67.6155 89.0867 67.1089 89.26 66.6022C89.4333 66.0822 89.5467 65.5622 89.6 65.0422H89.3C89.0867 65.0422 88.8933 64.9622 88.72 64.8022C88.56 64.6422 88.48 64.4555 88.48 64.2422C88.48 64.0155 88.56 63.8222 88.72 63.6622C88.8933 63.5022 89.0867 63.4222 89.3 63.4222H92.28V62.1022H91.68C90.7867 62.1022 90.16 61.9355 89.8 61.6022C89.44 61.2689 89.26 60.6822 89.26 59.8422V58.3622C89.26 58.0955 89.3467 57.8822 89.52 57.7222C89.6933 57.5622 89.9067 57.4822 90.16 57.4822C90.4 57.4822 90.6067 57.5622 90.78 57.7222C90.9533 57.8822 91.04 58.0955 91.04 58.3622V59.6222C91.04 59.9289 91.1 60.1355 91.22 60.2422C91.34 60.3489 91.58 60.4022 91.94 60.4022H92.3C92.38 59.5089 92.68 58.8822 93.2 58.5222C93.72 58.1622 94.54 57.9822 95.66 57.9822H100.76V57.2622C100.707 57.2755 100.653 57.2889 100.6 57.3022C100.547 57.3022 100.487 57.3022 100.42 57.3022C100.127 57.3022 99.8733 57.2089 99.66 57.0222C99.46 56.8222 99.36 56.5622 99.36 56.2422V55.7822H96.28V56.2422C96.28 56.5622 96.1733 56.8222 95.96 57.0222C95.76 57.2089 95.5133 57.3022 95.22 57.3022C94.9267 57.3022 94.6733 57.2089 94.46 57.0222C94.2467 56.8222 94.14 56.5622 94.14 56.2422V55.7822H89.48C89.24 55.7822 89.0333 55.6955 88.86 55.5222C88.7 55.3489 88.62 55.1489 88.62 54.9222C88.62 54.6822 88.7 54.4755 88.86 54.3022C89.0333 54.1289 89.24 54.0422 89.48 54.0422H94.14V53.3822C94.14 53.0489 94.2467 52.7889 94.46 52.6022C94.6733 52.4155 94.9267 52.3222 95.22 52.3222C95.5133 52.3222 95.76 52.4155 95.96 52.6022C96.1733 52.7889 96.28 53.0489 96.28 53.3822V54.0422H99.36V53.3822C99.36 53.0489 99.46 52.7889 99.66 52.6022C99.8733 52.4022 100.127 52.3022 100.42 52.3022C100.727 52.3022 100.98 52.4022 101.18 52.6022C101.393 52.7889 101.5 53.0489 101.5 53.3822V54.0422H106.1C106.34 54.0422 106.54 54.1289 106.7 54.3022C106.873 54.4755 106.96 54.6822 106.96 54.9222C106.96 55.1489 106.873 55.3489 106.7 55.5222C106.54 55.6955 106.34 55.7822 106.1 55.7822H104.52C104.627 55.8222 104.713 55.8755 104.78 55.9422C104.847 55.9822 104.94 56.0622 105.06 56.1822C105.193 56.2889 105.327 56.3955 105.46 56.5022C105.593 56.6089 105.687 56.6889 105.74 56.7422C105.94 56.9155 106.04 57.1155 106.04 57.3422C106.04 57.5689 105.953 57.7822 105.78 57.9822H106.02C106.247 57.9822 106.44 58.0689 106.6 58.2422C106.773 58.4155 106.86 58.6155 106.86 58.8422C106.86 59.0689 106.773 59.2689 106.6 59.4422C106.44 59.6022 106.247 59.6822 106.02 59.6822H102.76C102.787 60.5355 102.84 61.3489 102.92 62.1222C103.013 62.8822 103.127 63.6022 103.26 64.2822C103.487 63.7755 103.687 63.2555 103.86 62.7222C104.047 62.1889 104.213 61.6422 104.36 61.0822C104.427 60.8022 104.567 60.6022 104.78 60.4822C105.007 60.3622 105.253 60.3422 105.52 60.4222C105.76 60.4889 105.94 60.6222 106.06 60.8222C106.193 61.0089 106.227 61.2422 106.16 61.5222C105.907 62.4955 105.6 63.4289 105.24 64.3222C104.88 65.2022 104.467 66.0355 104 66.8222C104.12 67.0889 104.24 67.3422 104.36 67.5822C104.493 67.8222 104.633 68.0489 104.78 68.2622C105.087 68.7022 105.333 68.6555 105.52 68.1222L105.8 67.2822C105.88 67.0289 106.04 66.8555 106.28 66.7622C106.533 66.6689 106.787 66.6755 107.04 66.7822C107.293 66.8755 107.46 67.0355 107.54 67.2622C107.633 67.4889 107.633 67.7289 107.54 67.9822C107.447 68.2622 107.34 68.5489 107.22 68.8422C107.1 69.1355 106.987 69.4089 106.88 69.6622C106.64 70.1955 106.327 70.5555 105.94 70.7422C105.553 70.9422 105.147 70.9622 104.72 70.8022C104.307 70.6555 103.913 70.3355 103.54 69.8422C103.407 69.6555 103.273 69.4555 103.14 69.2422C103.007 69.0422 102.88 68.8289 102.76 68.6022C102.16 69.3355 101.48 70.0155 100.72 70.6422C100.493 70.8289 100.233 70.9222 99.94 70.9222C99.66 70.9355 99.4133 70.8289 99.2 70.6022C99.0667 70.4555 98.9933 70.2622 98.98 70.0222C98.9667 69.7955 99.02 69.5955 99.14 69.4222H97.5C96.5533 69.4222 95.8667 69.2422 95.44 68.8822C95.0267 68.5222 94.82 67.8689 94.82 66.9222V62.9022C94.82 61.9555 95.0267 61.3022 95.44 60.9422C95.8667 60.5822 96.5533 60.4022 97.5 60.4022H99.9C100.127 60.4022 100.313 60.4755 100.46 60.6222C100.62 60.7555 100.7 60.9355 100.7 61.1622C100.7 61.3889 100.62 61.5755 100.46 61.7222C100.313 61.8689 100.127 61.9422 99.9 61.9422H99.1V62.9822C99.6867 63.0355 100.087 63.2022 100.3 63.4822C100.527 63.7622 100.64 64.2155 100.64 64.8422C100.64 65.4555 100.527 65.9089 100.3 66.2022C100.087 66.4822 99.6867 66.6489 99.1 66.7022V67.8222H100.3C100.5 67.8222 100.667 67.8689 100.8 67.9622C101.227 67.5222 101.607 67.0622 101.94 66.5822C101.633 65.6089 101.387 64.5422 101.2 63.3822C101.013 62.2089 100.887 60.9755 100.82 59.6822H95.66C95.06 59.6822 94.6533 59.7689 94.44 59.9422C94.2267 60.1155 94.12 60.4755 94.12 61.0222V63.0022C94.12 64.5222 94.0067 65.8822 93.78 67.0822C93.5667 68.2822 93.1533 69.4089 92.54 70.4622C92.4067 70.7155 92.1933 70.8689 91.9 70.9222C91.62 70.9889 91.3533 70.9555 91.1 70.8222ZM96.5 65.4022H98.24C98.5067 65.4022 98.6867 65.3689 98.78 65.3022C98.8733 65.2355 98.92 65.0889 98.92 64.8622C98.92 64.6222 98.8733 64.4689 98.78 64.4022C98.6867 64.3355 98.5067 64.3022 98.24 64.3022H96.5V65.4022ZM102.7 57.9822H104.34C104.22 57.8755 104.067 57.7422 103.88 57.5822C103.707 57.4089 103.567 57.2755 103.46 57.1822C103.287 57.0355 103.2 56.8422 103.2 56.6022C103.213 56.3489 103.3 56.1355 103.46 55.9622C103.58 55.8689 103.673 55.8089 103.74 55.7822H101.5V56.2422C101.54 56.2289 101.613 56.2222 101.72 56.2222C101.987 56.2222 102.213 56.3089 102.4 56.4822C102.6 56.6555 102.7 56.8955 102.7 57.2022V57.9822ZM97.5 67.8222V66.7222H96.5V66.8022C96.5 67.2155 96.5667 67.4889 96.7 67.6222C96.8467 67.7422 97.1133 67.8089 97.5 67.8222ZM96.5 62.9622H97.5V61.9422C97.1133 61.9422 96.8467 62.0089 96.7 62.1422C96.5667 62.2622 96.5 62.5289 96.5 62.9422V62.9622Z" fill="white" />
                        <rect y="32.043" width="60" height="60" rx="30" fill="#BFF187" />
                        <path className={`collectlove ${isAnimating ? 'animate' : ''}`} 
                         d="M26.0345 30.8923C20.6506 25.0932 11.9217 25.0932 6.53788 30.8923C1.15404 36.6915 1.15404 46.0938 6.53788 51.893L27.4719 74.442C28.8348 75.91 31.1652 75.91 32.5281 74.442L53.4621 51.893C58.846 46.0938 58.846 36.6915 53.4621 30.8923C48.0783 25.0932 39.3494 25.0932 33.9655 30.8923L32.5281 32.4407C31.1652 33.9086 28.8348 33.9086 27.4719 32.4407L26.0345 30.8923Z" fill="#F55A57" />
                        <path className={`collectlove ${isAnimating ? 'animate' : ''}`} 
                         d="M47.5863 25.3205C45.6334 24.5039 42.6914 27.0536 43.4048 29.2616C44.2466 31.8672 51.0247 31.0432 52.3065 30.8628C52.4463 30.8432 52.5834 30.817 52.7153 30.772C53.5753 30.4788 56.5228 29.057 47.5863 25.3205Z" fill="#6E5232" />
                        <path className={`collectlove ${isAnimating ? 'animate' : ''}`} 
                         d="M47.5863 25.3205C45.6334 24.5039 42.6914 27.0536 43.4048 29.2616C44.2466 31.8672 51.0247 31.0432 52.3065 30.8628C52.4463 30.8432 52.5834 30.817 52.7153 30.772C53.5753 30.4788 56.5228 29.057 47.5863 25.3205Z" fill="url(#paint0_radial_2132_1817)" fill-opacity="0.15" />
                        <path className={`collectlove ${isAnimating ? 'animate' : ''}`} 
                         d="M39.0198 28.1177C40.3746 25.907 45.1667 26.3492 46.062 29.0627C47.1184 32.2649 39.7536 36.2866 38.3431 37.0227C38.1892 37.103 38.0334 37.1748 37.8689 37.2242C36.7972 37.5462 32.8205 38.2336 39.0198 28.1177Z" fill="#6E5232" />
                        <path className={`collectlove ${isAnimating ? 'animate' : ''}`} 
                         d="M39.0198 28.1177C40.3746 25.907 45.1667 26.3492 46.062 29.0627C47.1184 32.2649 39.7536 36.2866 38.3431 37.0227C38.1892 37.103 38.0334 37.1748 37.8689 37.2242C36.7972 37.5462 32.8205 38.2336 39.0198 28.1177Z" fill="url(#paint1_radial_2132_1817)" fill-opacity="0.15" />
                        <path className={`collectlove ${isAnimating ? 'animate' : ''}`} 
                         d="M51.9911 34.3844C52.2913 35.2184 52.8864 35.7678 53.3203 35.6116C53.7541 35.4554 53.8624 34.6527 53.5622 33.8188C53.262 32.9848 52.6669 32.4354 52.233 32.5915C51.7991 32.7477 51.6908 33.5504 51.9911 34.3844Z" fill="black" />
                        <path className={`collectlove ${isAnimating ? 'animate' : ''}`} 
                         d="M44.2371 37.176C44.5373 38.0099 45.1324 38.5594 45.5663 38.4032C46.0001 38.247 46.1084 37.4443 45.8082 36.6103C45.5079 35.7764 44.9128 35.2269 44.479 35.3831C44.0451 35.5393 43.9368 36.342 44.2371 37.176Z" fill="black" />
                        <path className={`collectlove ${isAnimating ? 'animate' : ''}`} 
                         d="M53.6649 40.2247C54.1287 41.5862 53.0698 43.1738 51.2998 43.7707C49.5298 44.3676 47.7189 43.7478 47.2551 42.3863C46.7913 41.0248 48.517 41.3946 50.287 40.7977C52.057 40.2008 53.2011 38.8632 53.6649 40.2247Z" fill="black" />
                        <defs>
                            <radialGradient id="paint0_radial_2132_1817" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-163.346 -82.8601) rotate(70.2003) scale(6.52099 8.52229)">
                                <stop offset="0.33" stop-opacity="0" />
                                <stop offset="0.655" stop-opacity="0.6" />
                                <stop offset="1" />
                            </radialGradient>
                            <radialGradient id="paint1_radial_2132_1817" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-163.32 -84.2469) rotate(70.2003) scale(6.52099 8.52229)">
                                <stop offset="0.33" stop-opacity="0" />
                                <stop offset="0.655" stop-opacity="0.6" />
                                <stop offset="1" />
                            </radialGradient>
                        </defs>
                    </svg>

                ) : (

                    <svg width="121" height="93" viewBox="0 0 121 93" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M59.7943 28.8512C59.1538 30.2768 59.0903 31.2466 59.5494 32.5951C60.9265 36.6408 72.905 31.6597 72.905 31.6597L73.15 27.9158C73.15 27.9158 61.7159 24.5745 59.7943 28.8512Z" fill="#F498C1" />
                        <path d="M106.724 38.0947C107.475 36.9068 107.737 35.9613 107.734 34.4446C107.728 29.8945 98.591 30.4502 98.591 30.4502L97.5807 34.1002C97.5807 34.1002 104.472 41.6582 106.724 38.0947Z" fill="#F498C1" />
                        <path d="M99.1903 6.72382L69.8516 0.897523L70.435 51.9898L101.527 58.1642L99.1903 6.72382Z" fill="#F498C1" />
                        <path d="M94.5187 18.1619C94.9946 15.7654 93.6883 13.4866 91.6011 13.0721C89.5138 12.6576 87.436 14.2643 86.9601 16.6608L86.2972 19.9987C85.8213 22.3952 87.1276 24.674 89.2148 25.0885C91.3021 25.503 93.3799 23.8963 93.8558 21.4998L94.5187 18.1619Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M87.7162 19.5146L87.7037 19.5235L89.5728 22.7174L92.6563 20.5429L92.6509 20.5337C92.7118 20.4994 92.7717 20.4615 92.8305 20.4201C93.7782 19.7517 94.0703 18.3962 93.4828 17.3923C92.9293 16.4466 91.7926 16.1505 90.8704 16.6782C90.2422 15.8447 89.1066 15.6547 88.2268 16.2751C87.2791 16.9434 86.9871 18.299 87.5745 19.3028C87.6182 19.3775 87.6656 19.4481 87.7162 19.5146Z" fill="black" />
                        <path d="M83.2121 15.9165C83.688 13.52 82.3818 11.2413 80.2945 10.8268C78.2073 10.4123 76.1294 12.019 75.6535 14.4155L74.9907 17.7534C74.5147 20.1499 75.821 22.4287 77.9082 22.8432C79.9955 23.2577 82.0734 21.6509 82.5493 19.2544L83.2121 15.9165Z" fill="white" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M76.4077 17.2689L76.3952 17.2777L78.2644 20.4716L81.3478 18.2972L81.3425 18.288C81.4033 18.2537 81.4633 18.2158 81.5221 18.1744C82.4698 17.506 82.7618 16.1505 82.1743 15.1466C81.6208 14.2009 80.4842 13.9048 79.562 14.4325C78.9337 13.599 77.7981 13.409 76.9183 14.0294C75.9706 14.6977 75.6786 16.0533 76.266 17.0571C76.3098 17.1318 76.3571 17.2024 76.4077 17.2689Z" fill="black" />
                        <rect y="32.2422" width="120" height="60" rx="30" fill="#70CCF6" />
                        <path d="M74.8 71.0022C74.4933 71.0022 74.2267 70.9089 74 70.7222C73.7733 70.5355 73.66 70.2555 73.66 69.8822V65.5222C73.1267 65.7089 72.5467 65.9089 71.92 66.1222C71.2933 66.3222 70.72 66.5089 70.2 66.6822C69.8 66.8155 69.46 66.8089 69.18 66.6622C68.9 66.5155 68.7 66.2755 68.58 65.9422C68.46 65.6089 68.4733 65.3022 68.62 65.0222C68.78 64.7289 69.0467 64.5355 69.42 64.4422L69.76 64.3422V55.7622C69.76 55.4155 69.8667 55.1489 70.08 54.9622C70.3067 54.7622 70.5667 54.6622 70.86 54.6622C71.1667 54.6622 71.4267 54.7622 71.64 54.9622C71.8667 55.1489 71.98 55.4155 71.98 55.7622V63.6822C72.2733 63.5889 72.56 63.5022 72.84 63.4222C73.1333 63.3289 73.4067 63.2355 73.66 63.1422V53.5622C73.66 53.1889 73.7733 52.9089 74 52.7222C74.2267 52.5355 74.4933 52.4422 74.8 52.4422C75.1067 52.4422 75.3667 52.5355 75.58 52.7222C75.8067 52.9089 75.92 53.1889 75.92 53.5622V60.2422C75.9333 60.2289 75.94 60.2155 75.94 60.2022C75.9533 60.1889 75.9667 60.1755 75.98 60.1622C76.4333 59.5089 76.86 58.7822 77.26 57.9822C77.66 57.1822 78.02 56.3689 78.34 55.5422C78.66 54.7022 78.9133 53.9289 79.1 53.2222C79.1933 52.8889 79.3667 52.6422 79.62 52.4822C79.8867 52.3222 80.18 52.2889 80.5 52.3822C80.8067 52.4622 81.0333 52.6222 81.18 52.8622C81.3267 53.0889 81.36 53.3622 81.28 53.6822C81.1733 54.1222 81.04 54.5755 80.88 55.0422C80.72 55.5089 80.5467 55.9822 80.36 56.4622H86.26C86.58 56.4622 86.8333 56.5622 87.02 56.7622C87.2067 56.9622 87.3 57.2089 87.3 57.5022C87.3 57.7955 87.2067 58.0422 87.02 58.2422C86.8333 58.4422 86.58 58.5422 86.26 58.5422H85.1C84.9 61.1555 84.2667 63.4489 83.2 65.4222C84.2 66.5555 85.38 67.5555 86.74 68.4222C87.0467 68.6089 87.2267 68.8689 87.28 69.2022C87.3333 69.5355 87.26 69.8422 87.06 70.1222C86.86 70.4155 86.5733 70.5889 86.2 70.6422C85.84 70.6955 85.5 70.6022 85.18 70.3622C84.5933 69.9089 84.0267 69.4355 83.48 68.9422C82.9333 68.4355 82.42 67.8955 81.94 67.3222C80.94 68.5889 79.6667 69.6555 78.12 70.5222C77.8267 70.6822 77.52 70.7422 77.2 70.7022C76.88 70.6622 76.6267 70.4889 76.44 70.1822C76.28 69.9155 76.2333 69.6355 76.3 69.3422C76.3667 69.0489 76.5467 68.8289 76.84 68.6822C77.6133 68.2555 78.3067 67.7689 78.92 67.2222C79.5467 66.6755 80.0933 66.0822 80.56 65.4422C80.0933 64.6955 79.6733 63.9089 79.3 63.0822C78.94 62.2422 78.6467 61.3489 78.42 60.4022C78.3267 60.5355 78.2333 60.6755 78.14 60.8222C78.06 60.9689 77.9733 61.1089 77.88 61.2422C77.7067 61.4955 77.4667 61.6622 77.16 61.7422C76.8667 61.8222 76.5867 61.7755 76.32 61.6022C76.2267 61.5489 76.1467 61.4889 76.08 61.4222C76.0267 61.3555 75.9733 61.2822 75.92 61.2022V69.8822C75.92 70.2555 75.8067 70.5355 75.58 70.7222C75.3667 70.9089 75.1067 71.0022 74.8 71.0022ZM81.76 63.3622C82.0933 62.6289 82.3533 61.8622 82.54 61.0622C82.74 60.2489 82.8667 59.4089 82.92 58.5422H80.16C80.4 60.3289 80.9333 61.9355 81.76 63.3622ZM91.1 70.8222C90.86 70.6889 90.7133 70.4889 90.66 70.2222C90.62 69.9689 90.6667 69.7289 90.8 69.5022C91.2267 68.8355 91.5467 68.1422 91.76 67.4222C91.9733 66.6889 92.12 65.8955 92.2 65.0422H91.3C91.2467 65.7489 91.12 66.4422 90.92 67.1222C90.7333 67.7889 90.4467 68.4289 90.06 69.0422C89.9267 69.2555 89.7333 69.3955 89.48 69.4622C89.24 69.5289 89.0067 69.5022 88.78 69.3822C88.54 69.2489 88.3933 69.0622 88.34 68.8222C88.3 68.5822 88.3533 68.3489 88.5 68.1222C88.8333 67.6155 89.0867 67.1089 89.26 66.6022C89.4333 66.0822 89.5467 65.5622 89.6 65.0422H89.3C89.0867 65.0422 88.8933 64.9622 88.72 64.8022C88.56 64.6422 88.48 64.4555 88.48 64.2422C88.48 64.0155 88.56 63.8222 88.72 63.6622C88.8933 63.5022 89.0867 63.4222 89.3 63.4222H92.28V62.1022H91.68C90.7867 62.1022 90.16 61.9355 89.8 61.6022C89.44 61.2689 89.26 60.6822 89.26 59.8422V58.3622C89.26 58.0955 89.3467 57.8822 89.52 57.7222C89.6933 57.5622 89.9067 57.4822 90.16 57.4822C90.4 57.4822 90.6067 57.5622 90.78 57.7222C90.9533 57.8822 91.04 58.0955 91.04 58.3622V59.6222C91.04 59.9289 91.1 60.1355 91.22 60.2422C91.34 60.3489 91.58 60.4022 91.94 60.4022H92.3C92.38 59.5089 92.68 58.8822 93.2 58.5222C93.72 58.1622 94.54 57.9822 95.66 57.9822H100.76V57.2622C100.707 57.2755 100.653 57.2889 100.6 57.3022C100.547 57.3022 100.487 57.3022 100.42 57.3022C100.127 57.3022 99.8733 57.2089 99.66 57.0222C99.46 56.8222 99.36 56.5622 99.36 56.2422V55.7822H96.28V56.2422C96.28 56.5622 96.1733 56.8222 95.96 57.0222C95.76 57.2089 95.5133 57.3022 95.22 57.3022C94.9267 57.3022 94.6733 57.2089 94.46 57.0222C94.2467 56.8222 94.14 56.5622 94.14 56.2422V55.7822H89.48C89.24 55.7822 89.0333 55.6955 88.86 55.5222C88.7 55.3489 88.62 55.1489 88.62 54.9222C88.62 54.6822 88.7 54.4755 88.86 54.3022C89.0333 54.1289 89.24 54.0422 89.48 54.0422H94.14V53.3822C94.14 53.0489 94.2467 52.7889 94.46 52.6022C94.6733 52.4155 94.9267 52.3222 95.22 52.3222C95.5133 52.3222 95.76 52.4155 95.96 52.6022C96.1733 52.7889 96.28 53.0489 96.28 53.3822V54.0422H99.36V53.3822C99.36 53.0489 99.46 52.7889 99.66 52.6022C99.8733 52.4022 100.127 52.3022 100.42 52.3022C100.727 52.3022 100.98 52.4022 101.18 52.6022C101.393 52.7889 101.5 53.0489 101.5 53.3822V54.0422H106.1C106.34 54.0422 106.54 54.1289 106.7 54.3022C106.873 54.4755 106.96 54.6822 106.96 54.9222C106.96 55.1489 106.873 55.3489 106.7 55.5222C106.54 55.6955 106.34 55.7822 106.1 55.7822H104.52C104.627 55.8222 104.713 55.8755 104.78 55.9422C104.847 55.9822 104.94 56.0622 105.06 56.1822C105.193 56.2889 105.327 56.3955 105.46 56.5022C105.593 56.6089 105.687 56.6889 105.74 56.7422C105.94 56.9155 106.04 57.1155 106.04 57.3422C106.04 57.5689 105.953 57.7822 105.78 57.9822H106.02C106.247 57.9822 106.44 58.0689 106.6 58.2422C106.773 58.4155 106.86 58.6155 106.86 58.8422C106.86 59.0689 106.773 59.2689 106.6 59.4422C106.44 59.6022 106.247 59.6822 106.02 59.6822H102.76C102.787 60.5355 102.84 61.3489 102.92 62.1222C103.013 62.8822 103.127 63.6022 103.26 64.2822C103.487 63.7755 103.687 63.2555 103.86 62.7222C104.047 62.1889 104.213 61.6422 104.36 61.0822C104.427 60.8022 104.567 60.6022 104.78 60.4822C105.007 60.3622 105.253 60.3422 105.52 60.4222C105.76 60.4889 105.94 60.6222 106.06 60.8222C106.193 61.0089 106.227 61.2422 106.16 61.5222C105.907 62.4955 105.6 63.4289 105.24 64.3222C104.88 65.2022 104.467 66.0355 104 66.8222C104.12 67.0889 104.24 67.3422 104.36 67.5822C104.493 67.8222 104.633 68.0489 104.78 68.2622C105.087 68.7022 105.333 68.6555 105.52 68.1222L105.8 67.2822C105.88 67.0289 106.04 66.8555 106.28 66.7622C106.533 66.6689 106.787 66.6755 107.04 66.7822C107.293 66.8755 107.46 67.0355 107.54 67.2622C107.633 67.4889 107.633 67.7289 107.54 67.9822C107.447 68.2622 107.34 68.5489 107.22 68.8422C107.1 69.1355 106.987 69.4089 106.88 69.6622C106.64 70.1955 106.327 70.5555 105.94 70.7422C105.553 70.9422 105.147 70.9622 104.72 70.8022C104.307 70.6555 103.913 70.3355 103.54 69.8422C103.407 69.6555 103.273 69.4555 103.14 69.2422C103.007 69.0422 102.88 68.8289 102.76 68.6022C102.16 69.3355 101.48 70.0155 100.72 70.6422C100.493 70.8289 100.233 70.9222 99.94 70.9222C99.66 70.9355 99.4133 70.8289 99.2 70.6022C99.0667 70.4555 98.9933 70.2622 98.98 70.0222C98.9667 69.7955 99.02 69.5955 99.14 69.4222H97.5C96.5533 69.4222 95.8667 69.2422 95.44 68.8822C95.0267 68.5222 94.82 67.8689 94.82 66.9222V62.9022C94.82 61.9555 95.0267 61.3022 95.44 60.9422C95.8667 60.5822 96.5533 60.4022 97.5 60.4022H99.9C100.127 60.4022 100.313 60.4755 100.46 60.6222C100.62 60.7555 100.7 60.9355 100.7 61.1622C100.7 61.3889 100.62 61.5755 100.46 61.7222C100.313 61.8689 100.127 61.9422 99.9 61.9422H99.1V62.9822C99.6867 63.0355 100.087 63.2022 100.3 63.4822C100.527 63.7622 100.64 64.2155 100.64 64.8422C100.64 65.4555 100.527 65.9089 100.3 66.2022C100.087 66.4822 99.6867 66.6489 99.1 66.7022V67.8222H100.3C100.5 67.8222 100.667 67.8689 100.8 67.9622C101.227 67.5222 101.607 67.0622 101.94 66.5822C101.633 65.6089 101.387 64.5422 101.2 63.3822C101.013 62.2089 100.887 60.9755 100.82 59.6822H95.66C95.06 59.6822 94.6533 59.7689 94.44 59.9422C94.2267 60.1155 94.12 60.4755 94.12 61.0222V63.0022C94.12 64.5222 94.0067 65.8822 93.78 67.0822C93.5667 68.2822 93.1533 69.4089 92.54 70.4622C92.4067 70.7155 92.1933 70.8689 91.9 70.9222C91.62 70.9889 91.3533 70.9555 91.1 70.8222ZM96.5 65.4022H98.24C98.5067 65.4022 98.6867 65.3689 98.78 65.3022C98.8733 65.2355 98.92 65.0889 98.92 64.8622C98.92 64.6222 98.8733 64.4689 98.78 64.4022C98.6867 64.3355 98.5067 64.3022 98.24 64.3022H96.5V65.4022ZM102.7 57.9822H104.34C104.22 57.8755 104.067 57.7422 103.88 57.5822C103.707 57.4089 103.567 57.2755 103.46 57.1822C103.287 57.0355 103.2 56.8422 103.2 56.6022C103.213 56.3489 103.3 56.1355 103.46 55.9622C103.58 55.8689 103.673 55.8089 103.74 55.7822H101.5V56.2422C101.54 56.2289 101.613 56.2222 101.72 56.2222C101.987 56.2222 102.213 56.3089 102.4 56.4822C102.6 56.6555 102.7 56.8955 102.7 57.2022V57.9822ZM97.5 67.8222V66.7222H96.5V66.8022C96.5 67.2155 96.5667 67.4889 96.7 67.6222C96.8467 67.7422 97.1133 67.8089 97.5 67.8222ZM96.5 62.9622H97.5V61.9422C97.1133 61.9422 96.8467 62.0089 96.7 62.1422C96.5667 62.2622 96.5 62.5289 96.5 62.9422V62.9622Z" fill="white" />
                        <rect y="32.2422" width="60" height="60" rx="30" fill="#BFF187" />
                        <path d="M26.7525 46.7804C21.7763 41.3961 13.7083 41.3961 8.73215 46.7804C3.75595 52.1646 3.75595 60.8941 8.73215 66.2784L28.0811 87.2139C29.3408 88.5769 31.4948 88.5769 32.7545 87.2139L52.1035 66.2784C57.0796 60.8941 57.0796 52.1646 52.1035 46.7804C47.1273 41.3961 39.0593 41.3961 34.0831 46.7804L32.7545 48.2179C31.4948 49.5808 29.3408 49.5808 28.0811 48.2179L26.7525 46.7804Z" stroke="#F55A57" stroke-width="3" stroke-linecap="round" />
                    </svg>
                )}
            </div>
        </div>
        )}
        </>
    );
};

export default LearnAreaCollect;
