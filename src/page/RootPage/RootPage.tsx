import Project1 from "../../component/ProjectSegment/Project1/Project1"
import Project2 from "../../component/ProjectSegment/Project2/Project2"
import Project3 from "../../component/ProjectSegment/Project3/Project3"
import SlideContainer from "../../component/SlideContainer/SlideContainer"
import s from "../../component/SlideSegment/SlideSegment.module.sass"
import Img from "../../resource/396553998_1494515761392986_7956992640306451551_n.jpg"
import bg1 from "../../resource/magicpattern-mesh-gradient-1702427013603.png"
import bg2 from "../../resource/magicpattern-mesh-gradient-1702427596913.png"
import bg4 from "../../resource/magicpattern-mesh-gradient-1702499193887.png"
import bg5 from "../../resource/magicpattern-mesh-gradient-1702499322736.png"


const RootPage = () => {

    return (
        <div> 
            <SlideContainer
                config={{
                    childs: [
                        {
                            child: <div className={s.SliderSegmentWelcomeContainer}>
                                <div className={s.WelcomeTitle}>
                                    <div className={s.WelcomePretitle}>
                                        Welcome to the
                                    </div>
                                    <h1 className={s.Title1}>BIBA</h1>
                                    <h1 className={s.Title2}>PROJECT                                    
                                    <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg" className={`blob ${s.Blob1}`}>
                                        <defs>
                                            <clipPath id="b">
                                            <path
                                                d="M829.5 592Q753 684 683 766.5t-169 39Q415 762 314.5 735t-146-131Q123 500 216 430.5t149.5-120Q422 260 501 257.5T732 238q152-17 163 122.5T829.5 592Z"
                                            />
                                            </clipPath>
                                            <filter id="a" x="-50vw" y="-50vh" width="100vw" height="100vh">
                                            <feFlood flood-color="#fff" result="neutral-gray" />
                                            <feTurbulence
                                                type="fractalNoise"
                                                baseFrequency="2.5"
                                                numOctaves="100"
                                                stitchTiles="stitch"
                                                result="noise"
                                            />
                                            <feColorMatrix
                                                in="noise"
                                                type="saturate"
                                                values="0"
                                                result="destaturatedNoise"
                                            />
                                            <feComponentTransfer in="desaturatedNoise" result="theNoise">
                                                <feFuncA type="table" tableValues="0 0 0.5 0" />
                                            </feComponentTransfer>
                                            <feBlend
                                                in="SourceGraphic"
                                                in2="theNoise"
                                                mode="soft-light"
                                                result="noisy-image"
                                            />
                                            </filter>
                                            <pattern id="img-pattern1" patternUnits="userSpaceOnUse" width="100%" height="100%">
                                                <image href={bg1} width="100%" height="100%" />
                                            </pattern>
                                        </defs>
                                        <g filter="url(#a)" clip-path="url(#b)">
                                            <path
                                            fill="url(#img-pattern1)"
                                            d="M829.5 592Q753 684 683 766.5t-169 39Q415 762 314.5 735t-146-131Q123 500 216 430.5t149.5-120Q422 260 501 257.5T732 238q152-17 163 122.5T829.5 592Z"
                                            />
                                        </g>
                                        </svg>
                                    </h1>
                                    <div className={s.SCContainer}>
                                        <div> scroll down </div>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={s.DownSvg} version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 122.88 120.64" >
                                            <g><path d="M108.91,54.03c1.63-1.55,3.74-2.31,5.85-2.28c2.11,0.03,4.2,0.84,5.79,2.44l0.12,0.12c1.5,1.58,2.23,3.6,2.2,5.61 c-0.03,2.01-0.82,4.02-2.37,5.55c-17.66,17.66-35.61,35.13-53.4,52.68c-0.05,0.07-0.1,0.13-0.16,0.19 c-1.63,1.55-3.76,2.31-5.87,2.28c-2.11-0.03-4.21-0.85-5.8-2.45l-0.26-0.27C37.47,100.43,19.87,82.98,2.36,65.46 C0.82,63.93,0.03,61.93,0,59.92c-0.03-2.01,0.7-4.03,2.21-5.61l0.15-0.15c1.58-1.57,3.66-2.38,5.76-2.41 c2.1-0.03,4.22,0.73,5.85,2.28l47.27,47.22L108.91,54.03L108.91,54.03z M106.91,2.26c1.62-1.54,3.73-2.29,5.83-2.26 c2.11,0.03,4.2,0.84,5.79,2.44l0.12,0.12c1.5,1.57,2.23,3.6,2.21,5.61c-0.03,2.01-0.82,4.02-2.37,5.55 C101.2,31.01,84.2,48.87,67.12,66.39c-0.05,0.07-0.11,0.14-0.17,0.21c-1.63,1.55-3.76,2.31-5.87,2.28 c-2.11-0.03-4.21-0.85-5.8-2.45C38.33,48.94,21.44,31.36,4.51,13.83l-0.13-0.12c-1.54-1.53-2.32-3.53-2.35-5.54 C2,6.16,2.73,4.14,4.23,2.56l0.15-0.15C5.96,0.84,8.05,0.03,10.14,0c2.1-0.03,4.22,0.73,5.85,2.28l45.24,47.18L106.91,2.26 L106.91,2.26z"/></g>
                                        </svg>
                                    </div>
                                </div>
                            </div>,
                            transform: `0`
                        }, 
                        {
                            child: <div className={s.SliderSegmentWIAContainer}>
                                <svg viewBox="0 0 1000 1000" className={`blob ${s.BlobQ}`} xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <clipPath id="ae">
                                        <path
                                            fill="currentColor"
                                            d="M781 616q-5 116-120.5 128.5T406 830q-139 73-176.5-72.5t-69-269Q129 365 203.5 240t218-115.5Q565 134 718 161.5t110.5 183Q786 500 781 616Z"
                                        />
                                        </clipPath>
                                        <pattern
                                        id="be"
                                        patternUnits="userSpaceOnUse"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 100 100"
                                        fill="#fff"
                                        >
                                        <circle cx="25" cy="25" r="8.333" />
                                        <circle cx="75" cy="75" r="8.333" />
                                        </pattern>
                                    </defs>
                                    <g clip-path="url(#ae)">
                                        <path
                                        fill="url(#be)"
                                        d="M781 616q-5 116-120.5 128.5T406 830q-139 73-176.5-72.5t-69-269Q129 365 203.5 240t218-115.5Q565 134 718 161.5t110.5 183Q786 500 781 616Z"
                                        />
                                    </g>
                                </svg>
                                <div className={s.WIAContent}>
                                    <div className={s.WiaPhys}>
                                        <svg viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg"
                                            className={`blob ${s.Blob2}`}> 
                                            <defs>
                                                <clipPath id="b1">
                                                    <path
                                                        fill="currentColor"
                                                        d="M897.5 628.5q-91.5 128.5-213 180t-245.5 32q-124-19.5-149-137t-118-237q-93-119.5 52.5-156T457 262q87-12 151 40.5t222.5 125q158.5 72.5 67 201Z"
                                                    />
                                                </clipPath>
                                                <filter id="a1" x="-50vw" y="-50vh" width="100vw" height="100vh">
                                                <feFlood flood-color="#fff" result="neutral-gray" />
                                                <feTurbulence
                                                    type="fractalNoise"
                                                    baseFrequency="2.5"
                                                    numOctaves="100"
                                                    stitchTiles="stitch"
                                                    result="noise"
                                                />
                                                <feColorMatrix
                                                    in="noise"
                                                    type="saturate"
                                                    values="0"
                                                    result="destaturatedNoise"
                                                />
                                                <feComponentTransfer in="desaturatedNoise" result="theNoise">
                                                    <feFuncA type="table" tableValues="0 0 0.5 0" />
                                                </feComponentTransfer>
                                                <feBlend
                                                    in="SourceGraphic"
                                                    in2="theNoise"
                                                    mode="soft-light"
                                                    result="noisy-image"
                                                />
                                                </filter>
                                                <pattern id="img-pattern2" patternUnits="userSpaceOnUse" width="100%" height="100%">
                                                    <image href={bg1} height="100%" />
                                                </pattern>
                                            </defs>
                                            <g filter="url(#a1)" clip-path="url(#b1)">
                                                <path
                                                fill="url(#img-pattern2)"
                                                d="M897.5 628.5q-91.5 128.5-213 180t-245.5 32q-124-19.5-149-137t-118-237q-93-119.5 52.5-156T457 262q87-12 151 40.5t222.5 125q158.5 72.5 67 201Z"
                                                />
                                            </g>
                                        </svg>
                                        <h1>Who i am ?</h1>
                                        <div className={s.WiaContext}>
                                            <span>I'm a sixteen-year-old fan of the HUGO mocktail</span>
                                            <span>I am not a woman</span>
                                            <span>I have extreme social anxiety</span>
                                            <span>I'll die if I don't listen to music for two hours</span>
                                        </div>
                                    </div>
                                </div>
                                <div className={s.ImgContainer}>
                                    <div className={s.ImageWrap}>
                                        <img src={Img} alt="" draggable="false" className={s.IMG}/>
                                    </div>
                                </div>
                            </div>,
                            transform: `-${window.innerWidth}px`
                        },
                        {
                            child: <div className={s.SliderSegmentWIIContainer}>
                                <h1 className={s.WIITitle}>
                                    <svg viewBox="0 0 1000 1000" className={`blob ${s.Blob4}`} xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <clipPath id="aq">
                                            <path
                                                fill="currentColor"
                                                d="M793 615.5q-18 115.5-112 246t-218.5 25Q338 781 254.5 700.5T145.5 491q-25.5-129 44-269t217-84.5Q554 193 643 249.5T771.5 403Q811 500 793 615.5Z"
                                            />
                                            </clipPath>
                                            <pattern
                                            id="bq"
                                            patternUnits="userSpaceOnUse"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 100 100"
                                            fill="#fff"
                                            >
                                            <circle cx="25" cy="25" r="8.333" />
                                            <circle cx="75" cy="75" r="8.333" />
                                            </pattern>
                                        </defs>
                                        <g clip-path="url(#aq)">
                                            <path
                                            fill="url(#bq)"
                                            d="M793 615.5q-18 115.5-112 246t-218.5 25Q338 781 254.5 700.5T145.5 491q-25.5-129 44-269t217-84.5Q554 193 643 249.5T771.5 403Q811 500 793 615.5Z"
                                            />
                                        </g>
                                    </svg>
                                    What is it?
                                </h1>
                                <div className={s.WIIContent}>
                                    <p className={s.P1} style={{
                                    transform: `translateX(${window.innerHeight}px)`,
                                }}>
                                        This site represents my portfolio, as well as a personal blog</p>
                                    <p className={s.P2} style={{
                                    transform: `translateX(${window.innerHeight}px)`,
                                }}>I will also publish my future projects on this resource, and I will also try to make a forum out of it</p>
                                    <p className={s.P3} style={{
                                    transform: `translateX(${window.innerHeight}px)`,
                                }}>
                                    <svg viewBox="0 0 1000 1000" className={`blob ${s.Blob3}`} xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <clipPath id="b3">
                                            <path
                                                fill="currentColor"
                                                d="M761 611q-39 111-150 97t-285 63q-174 77-182-97t111.5-236.5Q375 375 437.5 253t214-89q151.5 33 150 184.5T761 611Z"
                                            />
                                            </clipPath>
                                            <filter id="a3" x="-50vw" y="-50vh" width="100vw" height="100vh">
                                            <feFlood flood-color="#fff" result="neutral-gray" />
                                            <feTurbulence
                                                type="fractalNoise"
                                                baseFrequency="2.5"
                                                numOctaves="100"
                                                stitchTiles="stitch"
                                                result="noise"
                                            />
                                            <feColorMatrix
                                                in="noise"
                                                type="saturate"
                                                values="0"
                                                result="destaturatedNoise"
                                            />
                                            <feComponentTransfer in="desaturatedNoise" result="theNoise">
                                                <feFuncA type="table" tableValues="0 0 0.5 0" />
                                            </feComponentTransfer>
                                            <feBlend
                                                in="SourceGraphic"
                                                in2="theNoise"
                                                mode="soft-light"
                                                result="noisy-image"
                                            />
                                            </filter>
                                            <pattern id="img-pattern3" patternUnits="userSpaceOnUse" width="100%" height="100%">
                                                <image href={bg4} height="100%" />
                                            </pattern> 
                                        </defs>
                                        <g filter="url(#a3)" clip-path="url(#b3)">
                                            <path
                                            fill="url(#img-pattern3)"
                                            d="M761 611q-39 111-150 97t-285 63q-174 77-182-97t111.5-236.5Q375 375 437.5 253t214-89q151.5 33 150 184.5T761 611Z"
                                            />
                                        </g>
                                    </svg>
                                    <svg className={`blob ${s.Blob5}`} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <clipPath id="b4">
                                            <path
                                                fill="currentColor"
                                                d="M853.5 602.5q-70.5 102.5-188 74T450 801q-98 153-188 45T145 619q-27-119 62-193t153.5-115.5q64.5-41.5 146-62t197.5-1q116 19.5 168 136t-18.5 219Z"
                                            />
                                            </clipPath>
                                            <filter id="a4" x="-50vw" y="-50vh" width="100vw" height="100vh">
                                            <feFlood flood-color="#fff" result="neutral-gray" />
                                            <feTurbulence
                                                type="fractalNoise"
                                                baseFrequency="2.5"
                                                numOctaves="100"
                                                stitchTiles="stitch"
                                                result="noise"
                                            />
                                            <feColorMatrix
                                                in="noise"
                                                type="saturate"
                                                values="0"
                                                result="destaturatedNoise"
                                            />
                                            <feComponentTransfer in="desaturatedNoise" result="theNoise">
                                                <feFuncA type="table" tableValues="0 0 0.5 0" />
                                            </feComponentTransfer>
                                            <feBlend
                                                in="SourceGraphic"
                                                in2="theNoise"
                                                mode="soft-light"
                                                result="noisy-image"
                                            />
                                            </filter>
                                            <pattern id="img-pattern4" patternUnits="userSpaceOnUse" width="100%" height="100%">
                                                <image href={bg5} height="100%" />
                                            </pattern>
                                        </defs>
                                        <g filter="url(#a4)" clip-path="url(#b4)">
                                            <path
                                            fill="url(#img-pattern4)"
                                            d="M853.5 602.5q-70.5 102.5-188 74T450 801q-98 153-188 45T145 619q-27-119 62-193t153.5-115.5q64.5-41.5 146-62t197.5-1q116 19.5 168 136t-18.5 219Z"
                                            />
                                        </g>
                                    </svg>
                                    
                                    This website is, to some extent, my personal diary in which I will share my thoughts</p>
                                </div>
                            </div>,
                            transform: `${window.innerWidth}px`
                        },
                        {
                            child: <div className={s.SliderSegmentWAPContainer}>
                                <div className={s.SliderSegmentWAPTitle}>
                                    <h1>What about skills ?</h1>
                                </div>
                                <div className={s.SliderSegmentWAPContent}>
                                    <svg viewBox="0 0 1000 1000" className={`blob ${s.Blob7}`} xmlns="http://www.w3.org/2000/svg">
                                        <defs>
                                            <clipPath id="a8">
                                            <path
                                                fill="currentColor"
                                                d="M787.5 568q-125.5 68-184 127t-144 41q-85.5-18-164-75.5T172.5 484Q128 365 255 330t206-47q79-12 169.5 9.5T817 407q96 93-29.5 161Z"
                                            />
                                            </clipPath>
                                            <pattern
                                            id="b8"
                                            patternUnits="userSpaceOnUse"
                                            width="25"
                                            height="25"
                                            viewBox="0 0 100 100"
                                            fill="#fff"
                                            patternTransform="rotate(45 0 0)"
                                            >
                                            <path d="M0 0v100" stroke="#fff" stroke-width="20" />
                                            </pattern>
                                        </defs>
                                        <g clip-path="url(#a8)">
                                            <path
                                            fill="url(#b8)"
                                            d="M787.5 568q-125.5 68-184 127t-144 41q-85.5-18-164-75.5T172.5 484Q128 365 255 330t206-47q79-12 169.5 9.5T817 407q96 93-29.5 161Z"
                                            />
                                        </g>
                                    </svg>
                                    <div className={s.ContentD1}>
                                        <Project1/>
                                        <Project2/>
                                    </div>
                                    <div className={s.ContentD2}>
                                    <Project3/>
                                    </div>
                                </div>
                            </div>,
                            transform: `-${window.innerWidth}px`
                        },
                        {
                            child: <div className={s.SliderSegmentCMVContainer}>
                                <div className={s.CMVTitle}>
                                    <h1>Contact me</h1>
                                </div>
                                
                                <svg viewBox="0 0 1000 1000" className={`blob ${s.Blob8}`} xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <clipPath id="b9">
                                        <path
                                            fill="currentColor"
                                            d="M815.5 594Q688 688 594 776.5t-232 44Q224 776 216 638t40-236q48-98 146-184.5t227-31Q758 242 850.5 371t-35 223Z"
                                        />
                                        </clipPath>
                                        <filter id="a9" x="-50vw" y="-50vh" width="100vw" height="100vh">
                                        <feFlood flood-color="#fff" result="neutral-gray" />
                                        <feTurbulence
                                            type="fractalNoise"
                                            baseFrequency="2.5"
                                            numOctaves="100"
                                            stitchTiles="stitch"
                                            result="noise"
                                        />
                                        <feColorMatrix
                                            in="noise"
                                            type="saturate"
                                            values="0"
                                            result="destaturatedNoise"
                                        />
                                        <feComponentTransfer in="desaturatedNoise" result="theNoise">
                                            <feFuncA type="table" tableValues="0 0 0.5 0" />
                                        </feComponentTransfer>
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="theNoise"
                                            mode="soft-light"
                                            result="noisy-image"
                                        />
                                        </filter>
                                        <pattern id="img-pattern5" patternUnits="userSpaceOnUse" width="100%" height="100%">
                                                <image href={bg2} height="100%" />
                                            </pattern>
                                    </defs>
                                    <g filter="url(#a9)" clip-path="url(#b9)">
                                        <path
                                        fill="url(#img-pattern5)"
                                        d="M815.5 594Q688 688 594 776.5t-232 44Q224 776 216 638t40-236q48-98 146-184.5t227-31Q758 242 850.5 371t-35 223Z"
                                        />
                                    </g>
                                </svg>
                                <svg viewBox="0 0 1000 1000"className={`blob ${s.Blob9}`}xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <clipPath id="bw">
                                        <path
                                            fill="currentColor"
                                            d="M738 645.5Q668 791 468.5 846T196 700.5Q123 500 229.5 358T500 216q164 0 236 142t2 287.5Z"
                                        />
                                        </clipPath>
                                        <filter id="aw" x="-50vw" y="-50vh" width="100vw" height="100vh">
                                        <feFlood flood-color="#fff" result="neutral-gray" />
                                        <feTurbulence
                                            type="fractalNoise"
                                            baseFrequency="2.5"
                                            numOctaves="100"
                                            stitchTiles="stitch"
                                            result="noise"
                                        />
                                        <feColorMatrix
                                            in="noise"
                                            type="saturate"
                                            values="0"
                                            result="destaturatedNoise"
                                        />
                                        <feComponentTransfer in="desaturatedNoise" result="theNoise">
                                            <feFuncA type="table" tableValues="0 0 0.5 0" />
                                        </feComponentTransfer>
                                        <feBlend
                                            in="SourceGraphic"
                                            in2="theNoise"
                                            mode="soft-light"
                                            result="noisy-image"
                                        />
                                        </filter>
                                    </defs>
                                    <g filter="url(#aw)" clip-path="url(#bw)">
                                        <path
                                        fill="url(#img-pattern5)"
                                        d="M738 645.5Q668 791 468.5 846T196 700.5Q123 500 229.5 358T500 216q164 0 236 142t2 287.5Z"
                                        />
                                    </g>
                                    </svg>
                                <svg className={`blob ${s.Blob6}`} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <clipPath id="a6">
                                            <path fill="currentColor" d="M868 645q-22 145-163.5 178.5T456 809q-107-48-247-100T51 493.5Q33 330 159 228.5t261.5-73Q556 184 718 182.5t167 158Q890 500 868 645Z"/></clipPath>
                                            <pattern id="b6" patternUnits="userSpaceOnUse" width="25" height="25" viewBox="0 0 100 100" fill="#fff">
                                                <circle cx="25" cy="25" r="8.333"/><circle cx="75" cy="75" r="8.333"/>
                                                </pattern>
                                                </defs>
                                                <g clip-path="url(#a6)">
                                                    <path fill="url(#b6)" d="M868 645q-22 145-163.5 178.5T456 809q-107-48-247-100T51 493.5Q33 330 159 228.5t261.5-73Q556 184 718 182.5t167 158Q890 500 868 645Z"/>
                                            </g>
                                    </svg>
                                <svg className={`blob ${s.Blob7}`} viewBox="0 0 1000 1000" xmlns="http://www.w3.org/2000/svg">
                                    <defs>
                                        <clipPath id="a7">
                                        <path
                                            fill="currentColor"
                                            d="M809.5 639q21.5 139-125 108.5t-242.5-6q-96 24.5-182.5-49T198 509q25-110 70-221t157.5-57Q538 285 636 294.5T761 402q27 98 48.5 237Z"
                                        />
                                        </clipPath>
                                        <pattern
                                        id="b7"
                                        patternUnits="userSpaceOnUse"
                                        width="25"
                                        height="25"
                                        viewBox="0 0 100 100"
                                        fill="#fff"
                                        >
                                        <circle cx="25" cy="25" r="8.333" />
                                        <circle cx="75" cy="75" r="8.333" />
                                        </pattern>
                                    </defs>
                                    <g clip-path="url(#a7)">
                                        <path
                                        fill="url(#b7)"
                                        d="M809.5 639q21.5 139-125 108.5t-242.5-6q-96 24.5-182.5-49T198 509q25-110 70-221t157.5-57Q538 285 636 294.5T761 402q27 98 48.5 237Z"
                                        />
                                    </g>
                                </svg>
                                <div className={s.ContentWrapper}>
                                    <div className={s.CMVContent}>
                                        <button className={`${s.CMVButton} ${s.Btn1}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                                            </svg>
                                        </button>
                                        <button className={`${s.CMVButton} ${s.Btn2}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15"/>
                                            </svg>
                                        </button>
                                        <button className={`${s.CMVButton} ${s.Btn3}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
                                                <path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612m5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612"/>
                                            </svg>
                                        </button>
                                        <button className={`${s.CMVButton} ${s.Btn4}`}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                                            </svg>
                                        </button>
                                        <button className={`${s.CMVButton} ${s.Btn5}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                                                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M8.287 5.906c-.778.324-2.334.994-4.666 2.01-.378.15-.577.298-.595.442-.03.243.275.339.69.47l.175.055c.408.133.958.288 1.243.294.26.006.549-.1.868-.32 2.179-1.471 3.304-2.214 3.374-2.23.05-.012.12-.026.166.016.047.041.042.12.037.141-.03.129-1.227 1.241-1.846 1.817-.193.18-.33.307-.358.336a8.154 8.154 0 0 1-.188.186c-.38.366-.664.64.015 1.088.327.216.589.393.85.571.284.194.568.387.936.629.093.06.183.125.27.187.331.236.63.448.997.414.214-.02.435-.22.547-.82.265-1.417.786-4.486.906-5.751a1.426 1.426 0 0 0-.013-.315.337.337 0 0 0-.114-.217.526.526 0 0 0-.31-.093c-.3.005-.763.166-2.984 1.09z"/>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className={s.Separator}>
                                        - OR -
                                    </div>
                                    <div className={s.Credentials}>
                                        <div className={s.CredentialsItem}>
                                            lebedevpavel0511@gmail.com
                                        </div>
                                    </div>
                                </div>
                            </div>,
                            transform: `${window.innerWidth}px`
                        }
                    ]
                }}
            />
        </div>
    )
}

export default RootPage