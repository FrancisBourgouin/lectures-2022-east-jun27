import CommitListItem from "./CommitListItem";

export default function CommitList(props) {
  const { commitData } = props;

  const parsedCommits =
    Array.isArray(commitData) &&
    commitData.map((commit) => {
      return <CommitListItem key={commit.sha} message={commit.commit.message} />;
    });

  return (
    <section>
      <h1>Commits</h1>
      <ul>{parsedCommits}</ul>
    </section>
  );
}
