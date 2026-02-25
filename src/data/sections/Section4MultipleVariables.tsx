import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableH3,
    EditableParagraph,
    InlineClozeInput,
    InlineFormula,
    InlineTooltip,
} from "@/components/atoms";
import { getVariableInfo, clozePropsFromDefinition } from "../variables";

export const section4MultipleVariablesBlocks: ReactElement[] = [
    // Section Heading
    <StackLayout key="layout-s4-heading" maxWidth="xl">
        <Block id="block-s4-heading" padding="md">
            <EditableH2 id="h2-s4-heading" blockId="block-s4-heading">
                Factorising with Multiple Variables
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction
    <StackLayout key="layout-s4-intro" maxWidth="xl">
        <Block id="block-s4-intro" padding="sm">
            <EditableParagraph id="para-s4-intro" blockId="block-s4-intro">
                When expressions contain more than one variable (like x and y, or a and b), we need to find the HCF of both the <strong>numbers</strong> and the <strong>variables</strong>.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Key Point
    <StackLayout key="layout-s4-key" maxWidth="xl">
        <Block id="block-s4-key" padding="md">
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border-l-4 border-indigo-500 p-4 rounded-r-lg">
                <p className="font-semibold text-indigo-800 dark:text-indigo-200 mb-2">🔑 Key Point</p>
                <EditableParagraph id="para-s4-key" blockId="block-s4-key">
                    For{" "}
                    <InlineTooltip tooltip="Variables that appear in every term of the expression">
                        common variables
                    </InlineTooltip>, take the <strong>lowest power</strong> of each variable that appears in <strong>all terms</strong>.
                </EditableParagraph>
            </div>
        </Block>
    </StackLayout>,

    // Worked Example 1
    <StackLayout key="layout-s4-example1-heading" maxWidth="xl">
        <Block id="block-s4-example1-heading" padding="md">
            <EditableH3 id="h3-s4-example1-heading" blockId="block-s4-example1-heading">
                Worked Example 1
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-s4-example1" maxWidth="xl">
        <Block id="block-s4-example1" padding="md">
            <div className="bg-gradient-to-r from-cyan-50 to-teal-50 dark:from-cyan-950/30 dark:to-teal-950/30 rounded-xl p-6 border border-cyan-200 dark:border-cyan-800 space-y-4">
                <p className="font-semibold text-cyan-800 dark:text-cyan-200">Factorise: 4xy + 8x</p>

                <div className="space-y-3 text-foreground">
                    <div className="flex items-start gap-3">
                        <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">1</span>
                        <div>
                            <p><strong>Find numerical HCF:</strong></p>
                            <p className="text-muted-foreground">HCF(4, 8) = 4</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">2</span>
                        <div>
                            <p><strong>Find common variables:</strong></p>
                            <p className="text-muted-foreground">First term: xy (has x and y)</p>
                            <p className="text-muted-foreground">Second term: x (has x only)</p>
                            <p>Common variable: <span className="font-semibold text-cyan-600 dark:text-cyan-400">x</span></p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">3</span>
                        <div>
                            <p><strong>HCF = 4x</strong></p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">4</span>
                        <div>
                            <p><strong>Divide each term by HCF:</strong></p>
                            <p className="text-muted-foreground">4xy ÷ 4x = y</p>
                            <p className="text-muted-foreground">8x ÷ 4x = 2</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="bg-cyan-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">5</span>
                        <div>
                            <p><strong>Write the answer:</strong></p>
                            <p className="text-xl font-semibold text-cyan-700 dark:text-cyan-300">4xy + 8x = 4x(y + 2)</p>
                        </div>
                    </div>
                </div>
            </div>
        </Block>
    </StackLayout>,

    // Worked Example 2
    <StackLayout key="layout-s4-example2-heading" maxWidth="xl">
        <Block id="block-s4-example2-heading" padding="md">
            <EditableH3 id="h3-s4-example2-heading" blockId="block-s4-example2-heading">
                Worked Example 2
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-s4-example2" maxWidth="xl">
        <Block id="block-s4-example2" padding="md">
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-950/30 dark:to-pink-950/30 rounded-xl p-6 border border-rose-200 dark:border-rose-800 space-y-4">
                <p className="font-semibold text-rose-800 dark:text-rose-200">Factorise: 6ab + 3a</p>

                <div className="space-y-3 text-foreground">
                    <p><strong>Step 1:</strong> HCF of 6 and 3 = <span className="text-rose-600 dark:text-rose-400 font-semibold">3</span></p>
                    <p><strong>Step 2:</strong> Common variable = <span className="text-rose-600 dark:text-rose-400 font-semibold">a</span> (both terms have 'a')</p>
                    <p><strong>Step 3:</strong> HCF = <span className="text-rose-600 dark:text-rose-400 font-semibold">3a</span></p>
                    <p><strong>Step 4:</strong> 6ab ÷ 3a = 2b, and 3a ÷ 3a = 1</p>
                    <p className="text-xl font-semibold text-rose-700 dark:text-rose-300 pt-2">6ab + 3a = 3a(2b + 1)</p>
                </div>
            </div>
        </Block>
    </StackLayout>,

    // Important note about +1
    <StackLayout key="layout-s4-note" maxWidth="xl">
        <Block id="block-s4-note" padding="sm">
            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">⚠️ Don't forget the 1!</p>
                <EditableParagraph id="para-s4-note" blockId="block-s4-note">
                    When a term equals the HCF exactly (like 3a in the example above), dividing gives <strong>1</strong>, not 0. Always write the +1 inside the bracket!
                </EditableParagraph>
            </div>
        </Block>
    </StackLayout>,

    // Differentiated Exercise Heading
    <StackLayout key="layout-s4-exercise-heading" maxWidth="xl">
        <Block id="block-s4-exercise-heading" padding="md">
            <EditableH3 id="h3-s4-exercise-heading" blockId="block-s4-exercise-heading">
                Differentiated Exercise 2: Multiple Variables
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-s4-exercise-intro" maxWidth="xl">
        <Block id="block-s4-exercise-intro" padding="sm">
            <EditableParagraph id="para-s4-exercise-intro" blockId="block-s4-exercise-intro">
                Now it's your turn! Factorise these expressions with multiple variables.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Foundation Level
    <StackLayout key="layout-s4-foundation" maxWidth="xl">
        <Block id="block-s4-foundation" padding="md">
            <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Foundation</span>
                </div>
                <EditableParagraph id="para-s4-foundation" blockId="block-s4-foundation">
                    Factorise:{" "}
                    <InlineFormula latex="2xy + 4x" colorMap={{}} />{" "}
                    ={" "}
                    <InlineClozeInput
                        varName="ex2FoundationAnswer"
                        correctAnswer="2x(y + 2)"
                        {...clozePropsFromDefinition(getVariableInfo('ex2FoundationAnswer'))}
                    />
                </EditableParagraph>
                <p className="text-sm text-green-600 dark:text-green-400 mt-3">Hint: Both terms have x. What's the HCF of 2 and 4?</p>
            </div>
        </Block>
    </StackLayout>,

    // Standard Level
    <StackLayout key="layout-s4-standard" maxWidth="xl">
        <Block id="block-s4-standard" padding="md">
            <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Standard</span>
                </div>
                <EditableParagraph id="para-s4-standard" blockId="block-s4-standard">
                    Factorise:{" "}
                    <InlineFormula latex="6ab + 3a" colorMap={{}} />{" "}
                    ={" "}
                    <InlineClozeInput
                        varName="ex2StandardAnswer"
                        correctAnswer="3a(2b + 1)"
                        {...clozePropsFromDefinition(getVariableInfo('ex2StandardAnswer'))}
                    />
                </EditableParagraph>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">Hint: Remember to include the +1 when needed!</p>
            </div>
        </Block>
    </StackLayout>,

    // Challenge Level
    <StackLayout key="layout-s4-challenge" maxWidth="xl">
        <Block id="block-s4-challenge" padding="md">
            <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Challenge</span>
                </div>
                <EditableParagraph id="para-s4-challenge" blockId="block-s4-challenge">
                    Factorise:{" "}
                    <InlineFormula latex="8pq + 12p" colorMap={{}} />{" "}
                    ={" "}
                    <InlineClozeInput
                        varName="ex2ChallengeAnswer"
                        correctAnswer="4p(2q + 3)"
                        {...clozePropsFromDefinition(getVariableInfo('ex2ChallengeAnswer'))}
                    />
                </EditableParagraph>
                <p className="text-sm text-purple-600 dark:text-purple-400 mt-3">Find the HCF of 8 and 12, then identify the common variable.</p>
            </div>
        </Block>
    </StackLayout>,

    // Transition
    <StackLayout key="layout-s4-transition" maxWidth="xl">
        <Block id="block-s4-transition" padding="sm">
            <EditableParagraph id="para-s4-transition" blockId="block-s4-transition">
                Great progress! Next, we'll tackle expressions with negative terms — this requires extra care!
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
