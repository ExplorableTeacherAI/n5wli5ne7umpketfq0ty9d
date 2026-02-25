import { type ReactElement } from "react";
import { Block } from "@/components/templates";
import { StackLayout } from "@/components/layouts";
import {
    EditableH1,
    EditableH2,
    EditableParagraph,
    InlineScrubbleNumber,
    InlineTooltip,
    InlineFormula,
} from "@/components/atoms";
import { FormulaBlock } from "@/components/molecules";
import { getVariableInfo, numberPropsFromDefinition } from "../variables";
import { useVar } from "@/stores";

// Reactive component showing the expansion/factorisation relationship
function ExpansionDemo() {
    const coefficient = useVar('introCoefficient', 2) as number;
    const termA = useVar('introTermA', 3) as number;
    const termB = useVar('introTermB', 4) as number;

    const expandedA = coefficient * termA;
    const expandedB = coefficient * termB;

    return (
        <div className="bg-gradient-to-r from-blue-50 to-emerald-50 dark:from-blue-950/30 dark:to-emerald-950/30 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
            <div className="text-center space-y-6">
                {/* Factorised Form */}
                <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Factorised Form</p>
                    <div className="text-3xl font-semibold text-foreground">
                        <span className="text-blue-600 dark:text-blue-400">{coefficient}</span>
                        <span>(</span>
                        <span className="text-emerald-600 dark:text-emerald-400">{termA}</span>
                        <span> + </span>
                        <span className="text-amber-600 dark:text-amber-400">{termB}</span>
                        <span>)</span>
                    </div>
                </div>

                {/* Arrow showing direction */}
                <div className="flex items-center justify-center gap-4">
                    <div className="flex flex-col items-center">
                        <span className="text-2xl">↓</span>
                        <span className="text-xs text-muted-foreground">Expand</span>
                    </div>
                    <div className="flex flex-col items-center">
                        <span className="text-2xl">↑</span>
                        <span className="text-xs text-muted-foreground">Factorise</span>
                    </div>
                </div>

                {/* Expanded Form */}
                <div className="space-y-2">
                    <p className="text-sm font-medium text-muted-foreground uppercase tracking-wide">Expanded Form</p>
                    <div className="text-3xl font-semibold text-foreground">
                        <span className="text-blue-600 dark:text-blue-400">{coefficient}</span>
                        <span> × </span>
                        <span className="text-emerald-600 dark:text-emerald-400">{termA}</span>
                        <span> + </span>
                        <span className="text-blue-600 dark:text-blue-400">{coefficient}</span>
                        <span> × </span>
                        <span className="text-amber-600 dark:text-amber-400">{termB}</span>
                    </div>
                    <div className="text-3xl font-semibold text-foreground mt-2">
                        = <span className="text-emerald-600 dark:text-emerald-400">{expandedA}</span>
                        <span> + </span>
                        <span className="text-amber-600 dark:text-amber-400">{expandedB}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export const section1IntroductionBlocks: ReactElement[] = [
    // Title
    <StackLayout key="layout-intro-title" maxWidth="xl">
        <Block id="block-intro-title" padding="lg">
            <EditableH1 id="h1-intro-title" blockId="block-intro-title">
                Factorisation of Linear Algebraic Expressions
            </EditableH1>
        </Block>
    </StackLayout>,

    // Learning Objectives
    <StackLayout key="layout-intro-objectives" maxWidth="xl">
        <Block id="block-intro-objectives" padding="sm">
            <EditableParagraph id="para-intro-objectives" blockId="block-intro-objectives">
                <strong>Learning Objectives:</strong> By the end of this lesson, you will be able to identify common factors in algebraic expressions and write expressions in their factorised form.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Section Heading
    <StackLayout key="layout-intro-section-heading" maxWidth="xl">
        <Block id="block-intro-section-heading" padding="md">
            <EditableH2 id="h2-intro-section-heading" blockId="block-intro-section-heading">
                What is Factorisation?
            </EditableH2>
        </Block>
    </StackLayout>,

    // Explanation paragraph
    <StackLayout key="layout-intro-explanation" maxWidth="xl">
        <Block id="block-intro-explanation" padding="sm">
            <EditableParagraph id="para-intro-explanation" blockId="block-intro-explanation">
                <InlineTooltip tooltip="Factorisation is the reverse process of expansion. We find common factors and write them outside a bracket.">
                    Factorisation
                </InlineTooltip>{" "}
                is the reverse of expanding brackets. When we expand, we multiply each term inside the bracket by the number outside. When we factorise, we do the opposite — we find a{" "}
                <InlineTooltip tooltip="A common factor is a number or variable that divides evenly into all terms of an expression.">
                    common factor
                </InlineTooltip>{" "}
                and write it outside the bracket.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Interactive Demo Introduction
    <StackLayout key="layout-intro-demo-intro" maxWidth="xl">
        <Block id="block-intro-demo-intro" padding="sm">
            <EditableParagraph id="para-intro-demo-intro" blockId="block-intro-demo-intro">
                Try changing the numbers below to see how expansion and factorisation are related. The{" "}
                <InlineScrubbleNumber
                    varName="introCoefficient"
                    {...numberPropsFromDefinition(getVariableInfo('introCoefficient'))}
                />{" "}
                is the common factor, while{" "}
                <InlineScrubbleNumber
                    varName="introTermA"
                    {...numberPropsFromDefinition(getVariableInfo('introTermA'))}
                />{" "}
                and{" "}
                <InlineScrubbleNumber
                    varName="introTermB"
                    {...numberPropsFromDefinition(getVariableInfo('introTermB'))}
                />{" "}
                are the terms inside the bracket.
            </EditableParagraph>
        </Block>
    </StackLayout>,

    // Interactive Visualization
    <StackLayout key="layout-intro-demo" maxWidth="xl">
        <Block id="block-intro-demo" padding="md">
            <ExpansionDemo />
        </Block>
    </StackLayout>,

    // Key Concept Box
    <StackLayout key="layout-intro-key-concept" maxWidth="xl">
        <Block id="block-intro-key-concept" padding="md">
            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 rounded-r-lg">
                <p className="font-semibold text-amber-800 dark:text-amber-200 mb-2">💡 Key Concept</p>
                <EditableParagraph id="para-intro-key-concept" blockId="block-intro-key-concept">
                    Factorisation and expansion are <strong>inverse operations</strong>. To check if your factorisation is correct, you can expand it — you should get back to the original expression!
                </EditableParagraph>
            </div>
        </Block>
    </StackLayout>,

    // Formula showing the general pattern
    <StackLayout key="layout-intro-formula" maxWidth="xl">
        <Block id="block-intro-formula" padding="md">
            <FormulaBlock
                latex="a \cdot b + a \cdot c = a(b + c)"
                caption="The general pattern for factorisation"
            />
        </Block>
    </StackLayout>,

    // Transition to next section
    <StackLayout key="layout-intro-transition" maxWidth="xl">
        <Block id="block-intro-transition" padding="sm">
            <EditableParagraph id="para-intro-transition" blockId="block-intro-transition">
                Now that you understand what factorisation is, let's learn how to find common factors in the next section.
            </EditableParagraph>
        </Block>
    </StackLayout>,
];
