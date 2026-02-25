import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH2,
    EditableH3,
    EditableParagraph,
    InlineClozeInput,
    InlineFormula,
} from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { getVariableInfo, clozePropsFromDefinition } from "../variables";

export const section3SimpleExpressionsBlocks: ReactElement[] = [
    // Section Heading
    <StackLayout key="layout-s3-heading" maxWidth="xl">
        <Block id="block-s3-heading" padding="md">
            <EditableH2 id="h2-s3-heading" blockId="block-s3-heading">
                Factorising Simple Expressions
            </EditableH2>
        </Block>
    </StackLayout>,

    // Introduction
    <StackLayout key="layout-s3-intro" maxWidth="xl">
        <Block id="block-s3-intro" padding="sm">
            <EditableParagraph id="para-s3-intro" blockId="block-s3-intro">
                Now let's apply what we've learned to factorise simple algebraic expressions. We'll follow a clear step-by-step process.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Steps Box
    <StackLayout key="layout-s3-steps" maxWidth="xl">
        <Block id="block-s3-steps" padding="md">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
                <p className="font-semibold text-blue-800 dark:text-blue-200 mb-4 text-lg">Steps to Factorise:</p>
                <ol className="space-y-3 text-foreground list-decimal list-inside">
                    <li><strong>Identify the HCF</strong> of all terms (both numbers and variables)</li>
                    <li><strong>Write the HCF outside</strong> the bracket</li>
                    <li><strong>Divide each term</strong> by the HCF to get what goes inside the bracket</li>
                    <li><strong>Check your answer</strong> by expanding — you should get the original expression</li>
                </ol>
            </div>
        </Block>
    </StackLayout>,

    // Worked Example
    <StackLayout key="layout-s3-example-heading" maxWidth="xl">
        <Block id="block-s3-example-heading" padding="md">
            <EditableH3 id="h3-s3-example-heading" blockId="block-s3-example-heading">
                Worked Example
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-s3-example" maxWidth="xl">
        <Block id="block-s3-example" padding="md">
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 dark:from-emerald-950/30 dark:to-teal-950/30 rounded-xl p-6 border border-emerald-200 dark:border-emerald-800 space-y-4">
                <p className="font-semibold text-emerald-800 dark:text-emerald-200">Factorise: 6x + 12</p>

                <div className="space-y-3 text-foreground">
                    <div className="flex items-start gap-3">
                        <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">1</span>
                        <div>
                            <p><strong>Find the HCF:</strong></p>
                            <p className="text-muted-foreground">Factors of 6: 1, 2, 3, 6</p>
                            <p className="text-muted-foreground">Factors of 12: 1, 2, 3, 4, 6, 12</p>
                            <p>HCF = <span className="font-semibold text-emerald-600 dark:text-emerald-400">6</span></p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">2</span>
                        <div>
                            <p><strong>Write HCF outside:</strong> 6( ? )</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">3</span>
                        <div>
                            <p><strong>Divide each term by HCF:</strong></p>
                            <p className="text-muted-foreground">6x ÷ 6 = x</p>
                            <p className="text-muted-foreground">12 ÷ 6 = 2</p>
                        </div>
                    </div>

                    <div className="flex items-start gap-3">
                        <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium shrink-0">4</span>
                        <div>
                            <p><strong>Write the answer:</strong></p>
                            <p className="text-xl font-semibold text-emerald-700 dark:text-emerald-300">6x + 12 = 6(x + 2)</p>
                        </div>
                    </div>
                </div>
            </div>
        </Block>
    </StackLayout>,

    // Check step
    <StackLayout key="layout-s3-check" maxWidth="xl">
        <Block id="block-s3-check" padding="sm">
            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">✓ Check by expanding:</p>
                <p className="text-foreground">6(x + 2) = 6 × x + 6 × 2 = 6x + 12 ✓</p>
            </div>
        </Block>
    </StackLayout>,

    // Differentiated Exercise Heading
    <StackLayout key="layout-s3-exercise-heading" maxWidth="xl">
        <Block id="block-s3-exercise-heading" padding="md">
            <EditableH3 id="h3-s3-exercise-heading" blockId="block-s3-exercise-heading">
                Differentiated Exercise 1: Factorising Simple Expressions
            </EditableH3>
        </Block>
    </StackLayout>,

    <StackLayout key="layout-s3-exercise-intro" maxWidth="xl">
        <Block id="block-s3-exercise-intro" padding="sm">
            <EditableParagraph id="para-s3-exercise-intro" blockId="block-s3-exercise-intro">
                Choose your level and factorise the expressions. Type your answer in the format: number(variable + number), for example: 2(x + 3)
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Foundation Level
    <StackLayout key="layout-s3-foundation" maxWidth="xl">
        <Block id="block-s3-foundation" padding="md">
            <div className="bg-green-50 dark:bg-green-950/30 rounded-xl p-6 border-2 border-green-300 dark:border-green-700">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">Foundation</span>
                    <span className="text-green-700 dark:text-green-300 text-sm">Start here if you're new to factorisation</span>
                </div>
                <EditableParagraph id="para-s3-foundation" blockId="block-s3-foundation">
                    Factorise:{" "}
                    <InlineFormula latex="2x + 4" colorMap={{}} />{" "}
                    ={" "}
                    <InlineClozeInput
                        varName="ex1FoundationAnswer"
                        correctAnswer="2(x + 2)"
                        {...clozePropsFromDefinition(getVariableInfo('ex1FoundationAnswer'))}
                    />
                </EditableParagraph>
                <p className="text-sm text-green-600 dark:text-green-400 mt-3">Hint: What number divides both 2 and 4?</p>
            </div>
        </Block>
    </StackLayout>,

    // Standard Level
    <StackLayout key="layout-s3-standard" maxWidth="xl">
        <Block id="block-s3-standard" padding="md">
            <div className="bg-blue-50 dark:bg-blue-950/30 rounded-xl p-6 border-2 border-blue-300 dark:border-blue-700">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">Standard</span>
                    <span className="text-blue-700 dark:text-blue-300 text-sm">Ready for a bit more challenge</span>
                </div>
                <EditableParagraph id="para-s3-standard" blockId="block-s3-standard">
                    Factorise:{" "}
                    <InlineFormula latex="3a + 9" colorMap={{}} />{" "}
                    ={" "}
                    <InlineClozeInput
                        varName="ex1StandardAnswer"
                        correctAnswer="3(a + 3)"
                        {...clozePropsFromDefinition(getVariableInfo('ex1StandardAnswer'))}
                    />
                </EditableParagraph>
                <p className="text-sm text-blue-600 dark:text-blue-400 mt-3">Hint: Find the HCF of 3 and 9</p>
            </div>
        </Block>
    </StackLayout>,

    // Challenge Level
    <StackLayout key="layout-s3-challenge" maxWidth="xl">
        <Block id="block-s3-challenge" padding="md">
            <div className="bg-purple-50 dark:bg-purple-950/30 rounded-xl p-6 border-2 border-purple-300 dark:border-purple-700">
                <div className="flex items-center gap-2 mb-4">
                    <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">Challenge</span>
                    <span className="text-purple-700 dark:text-purple-300 text-sm">Push yourself further</span>
                </div>
                <EditableParagraph id="para-s3-challenge" blockId="block-s3-challenge">
                    Factorise:{" "}
                    <InlineFormula latex="5y + 15" colorMap={{}} />{" "}
                    ={" "}
                    <InlineClozeInput
                        varName="ex1ChallengeAnswer"
                        correctAnswer="5(y + 3)"
                        {...clozePropsFromDefinition(getVariableInfo('ex1ChallengeAnswer'))}
                    />
                </EditableParagraph>
                <p className="text-sm text-purple-600 dark:text-purple-400 mt-3">Remember to check your answer by expanding!</p>
            </div>
        </Block>
    </StackLayout>,

    // Transition
    <StackLayout key="layout-s3-transition" maxWidth="xl">
        <Block id="block-s3-transition" padding="sm">
            <EditableParagraph id="para-s3-transition" blockId="block-s3-transition">
                Excellent work! Now let's move on to expressions with multiple variables.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
