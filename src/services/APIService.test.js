import APIService from './APIService';

describe('APIService', () => {
    it('fetches most popular articles successfully', async () => {
        // mock fetch to return sample data
        global.fetch = jest.fn().mockResolvedValue({
            ok: true,
            json: () => Promise.resolve({ results: [{ id: 1, title: 'Test Article' }] })
        });

        const data = await APIService.fetchMostPopularArticles(1);
        expect(data.results).toHaveLength(1);
        expect(data.results[0]).toHaveProperty('title', 'Test Article');
    });
    it('handles fetch failure', async () => {
        global.fetch.mockImplementationOnce(() =>
            Promise.reject(new Error('Fetch failed'))
        );
        await expect(APIService.fetchMostPopularArticles(1)).rejects.toThrow('Fetch failed');
    });
});
