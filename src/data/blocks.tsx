import { type ReactElement } from "react";

// Initialize variables and their colors from this file's variable definitions
import { useVariableStore, initializeVariableColors } from "@/stores";
import { getDefaultValues, variableDefinitions } from "./variables";
useVariableStore.getState().initialize(getDefaultValues());
initializeVariableColors(variableDefinitions);

// Import section blocks
import { section1IntroductionBlocks } from "./sections/Section1Introduction";
import { section2CommonFactorsBlocks } from "./sections/Section2CommonFactors";
import { section3SimpleExpressionsBlocks } from "./sections/Section3SimpleExpressions";
import { section4MultipleVariablesBlocks } from "./sections/Section4MultipleVariables";
import { section5NegativeTermsBlocks } from "./sections/Section5NegativeTerms";

/**
 * ------------------------------------------------------------------
 * FACTORISATION OF LINEAR ALGEBRAIC EXPRESSIONS
 * Secondary 1 G3 - Singapore Mathematics
 * ------------------------------------------------------------------
 */

export const blocks: ReactElement[] = [
    // Section 1: Introduction - What is Factorisation?
    ...section1IntroductionBlocks,

    // Section 2: Finding Common Factors
    ...section2CommonFactorsBlocks,

    // Section 3: Factorising Simple Expressions (with Differentiated Exercise 1)
    ...section3SimpleExpressionsBlocks,

    // Section 4: Factorising with Multiple Variables (with Differentiated Exercise 2)
    ...section4MultipleVariablesBlocks,

    // Section 5: Factorising with Negative Terms (with Differentiated Exercise 3)
    ...section5NegativeTermsBlocks,
];
