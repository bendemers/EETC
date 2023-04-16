/* eslint-disable react/no-array-index-key */
import * as React from 'react';
import { useState } from 'react';
import {
  Box,
  Button,
  Container,
  FormControl,
  FormHelperText,
  Input,
  InputAdornment,
  InputLabel,
} from '@mui/material';

interface PostProps {
  title: string;
  author: string;
  content: string;
}

function Forum() {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');

  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setTitle(event.target.value);
  const handleAuthorChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setAuthor(event.target.value);
  const handleContentChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setContent(event.target.value);

  const handleSubmit = () => {
    if (!title.trim() || !author.trim() || !content.trim()) {
      setError('Please fill in all fields.');
    } else {
      setPosts([...posts, { title, author, content }]);
      setTitle('');
      setAuthor('');
      setContent('');
      setError('');
    }
  };

  return (
    <Container maxWidth="md" sx={{ mt: 3 }}>
      <Box sx={{ mb: 3 }}>
        <FormControl sx={{ width: '100%', mt: 2 }}>
          <InputLabel htmlFor="author">Author</InputLabel>
          <Input id="author" value={author} onChange={handleAuthorChange} />
        </FormControl>
        <FormControl sx={{ width: '100%', mt: 2 }}>
          <InputLabel htmlFor="content">Content</InputLabel>
          <Input
            id="content"
            multiline
            rows={4}
            value={content}
            onChange={handleContentChange}
            endAdornment={
              <InputAdornment position="end">
                <Button onClick={handleSubmit} size="large" />
              </InputAdornment>
            }
          />
        </FormControl>
        {error && (
          <FormHelperText sx={{ color: 'red', mt: 2 }}>{error}</FormHelperText>
        )}
        <Button sx={{ float: 'right', m: 2 }} variant="contained">
          Post
        </Button>
      </Box>
    </Container>
  );
}

export default Forum;
