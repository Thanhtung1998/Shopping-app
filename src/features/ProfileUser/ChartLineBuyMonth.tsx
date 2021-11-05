import React, { useRef } from 'react';
import { Bar, Line } from 'react-chartjs-2'
import styled from 'styled-components'
import tw from 'twin.macro'
import { useMediaQuery } from 'react-responsive'
import { SCREEN } from '../../components/responsive'

export interface ChartLineBuyMonth {
    typeChart: string;
}

const MainSection = styled.section`
    ${tw`
    w-full
    `}
`

const BodySection = styled.div`
    ${tw`
    w-full
    flex
    items-center
    justify-center
    `}
`

const BodyBg = styled.div`
    background-color: var(--comment-background);
    height: 30rem;
    max-height:30rem;
    ${tw`
    w-full
    p-3
    rounded-md
    `}
`

const BodyContent = styled.div`
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

export function ChartLineBuyMonth(props: ChartLineBuyMonth) {

    const { typeChart } = props

    const refChart = useRef(null)
    const isMobile = useMediaQuery({ maxWidth: SCREEN.sm })

    const styled = isMobile ? 'y' : 'x';

    const data = {
        labels: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        datasets: [
            {
                hoverBorderColor: "#ffffff",
                label: 'Buy',
                data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 55],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgb(255, 99, 132)',
                ],
                borderWidth: 2,
                hoverOffset: 4,
                barThickNess: 10,
            },
            {
                hoverBorderColor: "#ffffff",
                label: 'Remove',
                data: [10, 29, 30, 41, 16, 15, 8, 15, 9, 20, 31, 15],
                backgroundColor: [
                    'rgba(255, 159, 64, 0.5)', ,
                ],
                borderColor: [
                    'rgb(255, 159, 64)',
                ],
                borderWidth: 2,
                hoverOffset: 4,
                barThickNess: 10,
            }
        ],
    }


    return (
        <MainSection>
            <BodySection>
                <BodyBg>
                    <BodyContent>
                        {typeChart && typeChart === "Bar" && (
                            <Bar
                                ref={refChart}
                                height={630}
                                width={1090}
                                className="m-auto absolute top-0 left-0 p-2 sm:p-0"
                                data={data}
                                options={{
                                    // responsive: true,
                                    indexAxis: styled,
                                    scales: {
                                        x: { beginAtZero: true },
                                        y: { beginAtZero: true },
                                    },
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: "bottom",
                                            labels: {
                                                font: {
                                                    size: 14,
                                                    weight: "600",
                                                    lineHeight: 1.8,
                                                },
                                                color: '#B0B3B8',
                                                padding: 25,
                                                boxWidth: 30,
                                            }
                                        },
                                        tooltip: {
                                            // mode: 'index',
                                            backgroundColor: "#fff",
                                            borderColor: "hsl(209,100%,50%)",
                                            borderWidth: 1,
                                            titleColor: "black",
                                            titleAlign: "center",
                                            bodyAlign: "center",
                                            displayColors: true,
                                            // footerSpacing: 1,
                                            // bodySpacing: 20,
                                            callbacks: {
                                                labelTextColor: function (context: any) {
                                                    // console.log(context);
                                                    return context.dataset.borderColor;
                                                },
                                                label: function (toolTipItem: any) {
                                                    // console.log(toolTipItem);
                                                    return (` ${toolTipItem.dataset.label} :` + toolTipItem.formattedValue)
                                                }
                                            }
                                        },
                                    }

                                }}
                            />
                        )}
                        {typeChart && typeChart === "Line" && (
                            <Line
                                ref={refChart}
                                height={630}
                                width={1090}
                                className="m-auto absolute top-0 left-0 p-2 sm:p-0"
                                data={{
                                    labels: [
                                        'Jan',
                                        'Feb',
                                        'Mar',
                                        'Apr',
                                        'May',
                                        'Jun',
                                        'Jul',
                                        'Aug',
                                        'Sep',
                                        'Oct',
                                        'Nov',
                                        'Dec'
                                    ],
                                    datasets: [{
                                        label: 'Buy',
                                        data: [65, 59, 80, 81, 56, 55, 40, 59, 80, 81, 56, 55, 40],
                                        fill: false,
                                        borderColor: 'rgb(75, 192, 192)',
                                        tension: 0.1
                                    }]
                                }}
                                options={{
                                    indexAxis: 'x',
                                    scales: {
                                        x: { beginAtZero: true },
                                        y: { beginAtZero: true },
                                    },
                                    maintainAspectRatio: false,
                                    plugins: {
                                        legend: {
                                            position: "bottom",
                                            labels: {
                                                font: {
                                                    size: 14,
                                                    weight: "600",
                                                    lineHeight: 1.8,
                                                },
                                                color: '#B0B3B8',
                                                padding: 25,
                                                boxWidth: 30,
                                            }
                                        },
                                        tooltip: {
                                            mode: 'index',
                                            displayColors: false,
                                            backgroundColor: "green",
                                            callbacks: {
                                                label: function (toolTipItem: any) {
                                                    // console.log(toolTipItem);
                                                    return ("Revenue: $" + toolTipItem.formattedValue)
                                                }
                                            }
                                        },
                                    }
                                }}
                            />
                        )}

                    </BodyContent>
                </BodyBg>
            </BodySection>
        </MainSection>
    );
}
