"use client"
import { useState } from "react";
import Answer from "../../components/answer";
import Question from "../../components/question";

export default function question_03() {
    const centerContent = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
            <Question number={3} text="Write the necessary React code for generating the below figure (using flex)." />

            <div style={{ alignSelf: 'center', height: '600px', width: "400px", background: 'white', display: 'flex', flexDirection: 'column', gap: '8px', padding: '8px' }}>
                <div style={{ height: "9%", width: "100%", background: '#54d5eb', ...centerContent }}>
                    Header
                </div>

                <div style={{ height: "64%", width: "100%", display: 'flex', flexDirection: 'row', gap: '8px' }}>
                    <div style={{ height: "100%", width: "40%", display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ height: "40%", background: '#d7c9e3', ...centerContent }}>
                            Hero
                        </div>
                        <div style={{ height: "60%", background: '#9fc363', ...centerContent }}>
                            Sidebar
                        </div>
                    </div>
                    <div style={{ height: "100%", width: "60%", display: 'flex', flexDirection: 'column', gap: '8px' }}>
                        <div style={{ height: "75%", background: '#f5c632', ...centerContent }}>
                            Main Content
                        </div>
                        <div style={{ height: "25%", background: '#898989', ...centerContent }}>
                            Extra Content
                        </div>
                    </div>
                </div>

                <div style={{ height: "18%", width: "100%", display: 'flex', flexDirection: 'row', gap: '8px' }}>
                    <div style={{ height: "100%", width: "70%", background: '#2bb673', ...centerContent }}>
                        Related Images
                    </div>
                    <div style={{ height: "100%", width: "30%", background: '#f3ccde', ...centerContent }}>
                        Related Posts
                    </div>
                </div>

                <div style={{ height: "9%", width: "100%", background: '#fea500', ...centerContent }}>
                    Footer
                </div>
            </div>
        </div>
    );
}
