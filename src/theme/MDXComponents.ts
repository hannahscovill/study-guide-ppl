// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Highlight from '../components/Highlight/Highlight';
import Quiz from '../components/Quiz/Quix';
import CoefficientOfLiftCalculation from '../components/CoefficientOfLiftCalc/CoefficientOfLiftCount';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
//   Highlight,
//   Quiz,
  CoefficientOfLiftCalculation,
};