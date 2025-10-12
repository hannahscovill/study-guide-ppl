// Import the original mapper
import MDXComponents from '@theme-original/MDXComponents';
import Quiz from '../components/Quiz/Quix';
import CoefficientOfLiftCalculation from '../components/CoefficientOfLiftCalc/CoefficientOfLiftCount';
import FeatureCard from '../components/FeatureCard/FeatureCard';
import LeftPaddedText from '../components/IntentedText/IndentedText';
import BookClubHero from '../components/BookClubHero/BookClubHero';
import VideoPlayer from '../components/VideoPlayer/VideoPlayer';
import ReactPlayer from 'react-player';

export default {
  // Re-use the default mapping
  ...MDXComponents,
  // Map the "<Highlight>" tag to our Highlight component
  // `Highlight` will receive all props that were passed to `<Highlight>` in MDX
//   Highlight,
//   Quiz,
  CoefficientOfLiftCalculation,
  FeatureCard,
  IndentedText: LeftPaddedText,
  BookClubHero,
  VideoPlayer,
  ReactPlayer
};