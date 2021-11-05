import React, { useEffect, useRef, useState } from 'react';
import { Pie } from 'react-chartjs-2'
import styled from 'styled-components'
import tw from 'twin.macro'

export interface ChartHistoryBuyProps {
}

const ChartHistorySection = styled.section`
    font-family: inherit;
    ${tw`
    w-full
    `}
`

const BoxChartView = styled.div`

    font-family: inherit;
    height: 30rem;
    // width: 30rem;
    margin: auto;
    ${tw`
        w-full
        flex
        flex-col
        justify-center
        items-start
        xl:p-3
        p-1
        rounded-md
        overflow-hidden
    `}
    background-color: var(--comment-background);

`

const BodyChartView = styled.div`
    ${tw`
    w-full
    h-full
    flex
    flex-1
    relative
    top-0
    left-0
    items-center
    justify-center
    overflow-hidden
    `}
`


export function ChartHistoryBuy(props: ChartHistoryBuyProps) {

    const initialColor: any = ""
    const ref = useRef();
    const [Color1, setColor1] = useState(initialColor);
    const [Color2, setColor2] = useState(initialColor);
    const [Color3, setColor3] = useState(initialColor);

    useEffect(() => {
        const element: any = document.getElementById("chart-user-data")
        if (element) {
            const ctx = element.getContext('2d');
            ctx.lineWidth = 0.5;
            ctx.strokeStyle = '#ddd';
            const gradientGreen = ctx.createLinearGradient(0, 0, 500, 0);
            // x0 = starting point horizontal (left)
            // y0 = starting point vertical (top)
            // x1 = ending point horizontal 
            // y1 = ending point vertical
            gradientGreen.addColorStop(0, "#53E88B");
            gradientGreen.addColorStop(1, "#15BE77")
            const gradientBlue = ctx.createLinearGradient(0, 0, 500, 0);
            gradientBlue.addColorStop(0, "#4e54c8");
            gradientBlue.addColorStop(1, "#8f94fb");
            const gradientRed = ctx.createLinearGradient(0, 0, 500, 0);
            gradientRed.addColorStop(0, "#ED213A");
            gradientRed.addColorStop(1, "#93291E")
            setColor1(gradientGreen);
            setColor2(gradientBlue);
            setColor3(gradientRed);
            // console.log(gradientGreen)
        }

    }, [])


    return (
        <ChartHistorySection>
            <BoxChartView>
                <BodyChartView>
                    <Pie
                        id="chart-user-data"
                        className="m-auto absolute top-0 left-0 p-2 sm:p-0"
                        height="400"
                        width="800"
                        // style={{ width: '100%', height: "60vh" }}
                        ref={ref}
                        data={{
                            labels: [
                                'Buy',
                                'Remove',
                                'Return'
                            ],
                            datasets: [
                                {
                                    hoverBorderColor: "#ffffff",
                                    data: [70, 25, 5],
                                    backgroundColor: [
                                        Color1,
                                        Color2,
                                        Color3
                                    ],
                                    borderColor: "transparent",
                                    borderWidth: 2,
                                    hoverOffset: 4,
                                }
                            ],
                        }}
                        options={{
                            // responsive: true,
                            maintainAspectRatio: false,
                            plugins: {
                                legend: {
                                    position: "bottom",
                                    labels: {
                                        font: {
                                            size: 14,
                                            weight: "600",
                                            lineHeight: 1.8
                                        },
                                        color: '#B0B3B8',
                                        padding: 25,
                                        boxWidth: 30,
                                    }
                                },
                                tooltip: {
                                    backgroundColor: "green",
                                    borderColor: "red",
                                }
                            },
                        }}
                    />
                </BodyChartView>
            </BoxChartView>
        </ChartHistorySection>
    );
}
